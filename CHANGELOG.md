# Changelog

## 1.1.1 - Release readiness fixes

- Main app no longer requests administrator rights at every launch (removed `--uac-admin` from the PyInstaller build); admin is now requested only for system-level actions, matching documented behavior.
- Enable Protection now shows an explicit confirmation before making changes, disclosing that it writes hosts entries, applies browser URL-block policies, turns off DNS-over-HTTPS in supported Chromium browsers, and flushes DNS.
- Added a missing "Open data folder" action on the Logs page.
- Removed a duplicated disable-attempts counter (`self_control.disable_attempts`); the app now tracks a single counter in `stats.disable_attempts`.
- Removed a stale reference to a non-existent `archive/` folder from the README, and fixed an internal README inconsistency between `actions.log` and the real `logs.txt` file name.
- Removed real exported user log data that had accidentally been bundled into the old `releases/AntiCasinoShield_v1.0.0` folder; that superseded build was removed from the project tree.
- Fixed stale landing page content: version number, GitHub download link, and roadmap section (Trusted Person Mode was already shipped in 1.1.0, not planned).

## 1.1.0 - Self-Control MVP Upgrade

- Added first-run onboarding with block duration, goal, estimated spending and optional Strong Protection.
- Added standard Windows uninstall support and reset protection rules flow.
- Added Trusted Person Mode MVP through mailto confirmation codes.
- Reworked Self-Control statistics and estimated savings.
- Reworked bypass diagnostics with exportable reports.
- Added Inno Setup installer script and standard Windows uninstall helper.
- Moved runtime data to `%LOCALAPPDATA%\AntiCasino Shield\` for installed builds.
- Updated release versioning to v1.1.0.

## 1.0.0 - MVP Release

- Windows CustomTkinter application for gambling website blocking.
- Hosts-based blocking with AntiCasino Shield markers.
- Browser URLBlocklist policy support.
- Administrator permission checks and restart prompt.
- Hosts backup, restore and full reset.
- Strong protection with password and disable delay.
- Custom blocklist, site checker and bypass diagnostics.
- Action logs and crash logs.
- Export logs and open data folder actions.
- First-run wizard, version display and release installer.
- Optional ethical support card and Pro preview.
- Static landing page, privacy page, terms page and Telegram marketing materials.
