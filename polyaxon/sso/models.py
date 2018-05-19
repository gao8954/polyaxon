from django.conf import settings
from django.contrib.postgres.fields import ArrayField, JSONField
from django.db import models
from django.utils import timezone

from libs.models import DiffModel
from sso.providers.constants import PROVIDERS


class SSOIdentity(DiffModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='identities'
    )
    provider = models.CharField(
        max_length=32,
        choices=PROVIDERS.CHOICES)
    external_id = models.CharField(max_length=64, null=True)
    valid = models.BooleanField(default=False)
    last_verified = models.DateTimeField(default=timezone.now)
    last_synced = models.DateTimeField(default=timezone.now)
    scopes = ArrayField(models.CharField(max_length=200), blank=True, null=True)
    data = JSONField()

    class Meta:
        unique_together = (('provider', 'user'), ('provider', 'external_id'),)
        verbose_name_plural = 'SSOIdentities'

    def __str__(self):
        return '{} - {}'.format(self.user, self.provider)

    def is_valid(self):
        if not self.valid:
            return False
        if not self.last_verified:
            return False
        verification_schedule = PROVIDERS.get_verification_schedule(self.provider)
        if self.last_verified < timezone.now() - verification_schedule:
            return False
        return True
