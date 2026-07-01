# AntiCasino Shield v1.1.1

AntiCasino Shield v1.1.1 is a release-readiness update on top of the 1.1.0 Self-Control MVP. It does not change core blocking behavior; it fixes how the app requests administrator rights and closes a set of documentation and consistency gaps found during release review.

## Highlights

- The app no longer requires administrator rights just to open. Admin is requested only when you enable/disable protection, restore hosts, apply browser policies, or reset rules.
- Enabling protection now shows a clear confirmation of exactly what will change before it happens, including that DNS-over-HTTPS is turned off in supported Chromium browsers so the hosts block cannot be silently bypassed.
- Added a missing "Open data folder" button on the Logs page.
- Internal counter and documentation cleanups (see CHANGELOG.md for details).

## Carried over from 1.1.0

- First-run onboarding for block duration, goal, estimated spending and optional Strong Protection.
- Self-Control page with remaining days, disable attempts and estimated savings.
- Trusted Person Mode MVP through email request links and local confirmation-code hashes.
- Standard Windows installer and uninstaller through Inno Setup.
- Uninstall helper for optional cleanup of protection rules and local data.
- Clear bypass diagnostics with exportable report.

## SmartScreen Notice

Windows SmartScreen may show a warning because AntiCasino Shield is a new unsigned application. This does not automatically mean it is unsafe. Always download it only from the official project page or GitHub release.

## Disclaimer

AntiCasino Shield is not medical or psychological treatment. If gambling is seriously affecting your life, consider contacting professional support services in your country.
