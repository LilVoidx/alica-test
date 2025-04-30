export interface AliceRequest {
  version: string;
  session: {
    message_id: number;
    session_id: string;
    skill_id: string;
    user_id: string;
  };
  request: {
    command: string;
    original_utterance: string;
    type: string;
  };
  state?: any;
  meta?: any;
}

export interface AliceResponse {
  version: string;
  session: {
    message_id: number;
    session_id: string;
    skill_id: string;
    user_id: string;
  };
  response: {
    text: string;
    end_session: boolean;
  };
}
