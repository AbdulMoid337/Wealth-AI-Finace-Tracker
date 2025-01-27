import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { 
  generateMonthlyReports, 
  processRecurringTransaction, 
  triggerRecurringTransactions,
  checkBudgetAlerts 
} from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateMonthlyReports,
    processRecurringTransaction,
    triggerRecurringTransactions,
    checkBudgetAlerts
  ],
});