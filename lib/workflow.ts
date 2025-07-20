import { Client as WorkflowClient } from "@upstash/workflow"
import config from "@/lib/config"

export const workflowClient = new workflowClient({
    baseUrl: config.env.upstash.qstashUrl,
    token: config.env.upstash.qstashtoken
})