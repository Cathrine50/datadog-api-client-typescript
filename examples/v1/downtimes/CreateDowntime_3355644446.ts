/**
 * Schedule a monitor downtime returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "monitor" in the system
const MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

const params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_monitor_downtime_returns_OK_response",
    start: Math.round(new Date().getTime() / 1000),
    timezone: "Etc/UTC",
    scope: ["test:examplescheduleamonitordowntimereturnsokresponse"],
    monitorId: MONITOR_ID,
  },
};

apiInstance
  .createDowntime(params)
  .then((data: v1.Downtime) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
