# Security Policy

## Reporting Issues

Please report security bugs through the official project contact channel or GitHub issues if the repository is public.

Do not publish exploit details before the maintainer has time to review and fix the issue.

## System Changes

AntiCasino Shield changes the Windows hosts file only inside its own managed marker block. It should not remove or rewrite unrelated user entries.

The app may also apply browser URLBlocklist policies for supported browsers and can remove those policies during disable/reset.

## Logs

- Action logs are stored locally in `logs/actions.log`.
- Crash logs are stored locally in `logs/crash.log`.
- Logs are not uploaded automatically.

## Privacy

AntiCasino Shield does not collect personal data, browser history or analytics. Donation and payment links open third-party services, which are governed by their own policies.
