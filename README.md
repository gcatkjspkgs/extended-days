# Extended Days

[![kjspkg-available](https://github-production-user-asset-6210df.s3.amazonaws.com/79367505/250114674-fb848719-d52e-471b-a6cf-2c0ea6729f1c.svg)](https://kjspkglookup.modernmodpacks.site/#extended-days)
## How it works

This simple script pauses the daylight cycle every minute to reach the configured target length.
If you configure for a day to take an hour, every minute the sun and moon will stay still in the sky for 2 minutes, making up for the required 40 minutes extra (since vanilla days take 20 minutes). If you ever witnessed a bug, please report.

## Config

```js
global.dayLength = 40; // 40 minute day length
global.pauseCount = 20; // Optional. the number of times daylight cycle will be paused in every 20 minutes
```
