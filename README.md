Greetings,

Here's some possibly useful information to follow up on my presentation at the 6/9/23 FMDiSC meeting:
Testing & Monitoring Tools

Recording of this presentation:
https://www.youtube.com/watch?v=HQkRzhW6zwI

Contacts_xx.fmp12 files
open read only by default to Guest
to override, hold down the "Alt" key during launch
user: admin
password: fmdisc230609

LambdaTest
main
https://www.lambdatest.com/
test suite integrations: Cypress (links to Selenium, Appium and others in left column)
https://staging.lambdatestinternal.com/support/docs/getting-started-with-cypress-testing/
A Complete Guide To Cross Browser Testing With Cypress
https://www.lambdatest.com/learning-hub/cross-browser-testing-with-cypress~~~

Artillery

- quick way to obtain an FMS token

1. in an FM file script step, set a variable to a Base64 value...
   Set Variable >> $temp >> Base64EncodeRFC ( 3548 ; "username:password" )
   ...then have the script pause so you can use the Data Viewer to copy the resulting string
   ...run the script, copy the string and use it in the next step
2. open a Terminal window and run this curl command...
   $ curl -H 'Content-type: application/json' -H 'Authorization: Basic <your Base64 string>'
   -X POST -d '{}' <path to your hosted file>
   Note: it looks like JavaScript can be used in your Artillery .yml config file to automatically do these two steps, but that was beyond the scope of this presentation

   reference
   https://www.artillery.io/docs/guides/getting-started/installing-artillery
   Writing Your First Test
   https://www.artillery.io/docs/guides/getting-started/writing-your-first-test
   Core Concepts
   https://www.artillery.io/docs/guides/getting-started/core-concepts
   main
   https://www.artillery.io/
   npmjs
   https://www.npmjs.com/package/artillery
   plugins
   https://www.artillery.io/docs/guides/plugins/plugins-overview
   Check Your Site’s Performance With Artillery and Playwright
   https://dev-tester.com/check-your-sites-performance-with-artillery-and-playwright/

Playwright
main
https://playwright.dev/
github
https://github.com/microsoft/playwright#-playwright
LambdaTest: Playwright End To End Testing Tutorial: A Complete Guide
https://www.lambdatest.com/blog/playwright-end-to-end-testing/

Uptime Kuma
video: Meet Uptime Kuma, a Fancy Open Source Uptime Monitor for all your HomeLab Monitoring Needs (my start)
https://www.youtube.com/watch?v=r_A5NKkAqZM
github
https://github.com/louislam/uptime-kuma#uptime-kuma
Docker Hub
https://hub.docker.com/r/louislam/uptime-kuma
Meet Uptime Kuma, a Fancy Open Source Uptime Monitor for all your HomeLab Monitoring Needs (copy Compose file here)
https://techno-tim.github.io/posts/uptime-kuma/

Healthchecks (referenced in Q&A at end of presentation)
How to Monitor Cron Jobs with Healthchecks.io
https://healthchecks.io/docs/monitoring_cron_jobs/
github: self-hosting package
https://github.com/healthchecks/healthchecks
main
https://healthchecks.io/
Running with Docker
https://healthchecks.io/docs/self_hosted_docker/
pricing (includes "Hobbyist" free level)
https://healthchecks.io/pricing/

'Hope this helps,

Patrick Reagan
Web Apps using React, Express, Postgres

D3Tools
Altadena, CA USA
+01 626/507-8232
https://d3.tools

```

```

```

```

```

```
