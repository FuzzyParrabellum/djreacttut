import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import React, { useState, useEffect } from "react";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";
import { UserType } from "../page";
import { getAccessToken } from "@/app/lib/actions";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

const ConversationPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const userId = await getUserId();
  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="max-w-[1500px] max-auto px-6 py-12">
        <p>You need to be authenticated to access this...</p>
      </main>
    );
  }

  const conversation = await apiService.get(`/api/chat/${id}/`);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <ConversationDetail
        token={token}
        conversation={conversation.conversation}
        userId={userId}
      />
    </main>
  );
};

export default ConversationPage;
