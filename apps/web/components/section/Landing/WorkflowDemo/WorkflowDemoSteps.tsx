import {CalendarDays, File, Mail, MessageSquare} from "lucide-react";
import React from "react";

export const steps = [
    {
        icon: <Mail className="h-6 w-6"/>,
        title: "New Email Received",
        description: "When a new email with specific keywords arrives",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <File className="h-6 w-6"/>,
        title: "Create Document",
        description: "Automatically generate a document from the email content",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <MessageSquare className="h-6 w-6"/>,
        title: "Send Notification",
        description: "Alert your team in Slack or Teams about the new document",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <CalendarDays className="h-6 w-6"/>,
        title: "Schedule Follow-up",
        description: "Add a calendar event for follow-up in 3 days",
        color: "bg-pink-100 text-pink-600",
    },
];