"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChatApiError, sendChatMessage } from "@/lib/api";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

const WELCOME: Message = {
  id: "welcome",
  role: "system",
  content:
    "Connection established. I am your mental coach — here to listen, reflect, and help you navigate what you're carrying. What would you like to explore?",
};

function formatTimestamp(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const reply = await sendChatMessage(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      const message =
        err instanceof ChatApiError
          ? err.message
          : "Signal lost. Unable to reach the neural network.";
      setError(message);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit(event);
    }
  };

  return (
    <div className="relative z-10 flex h-full min-h-screen flex-col">
      {/* Header */}
      <header className="matrix-border matrix-panel border-b px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div>
            <p className="font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.35em] text-[var(--matrix-green-dim)] uppercase">
              Neural Link Active
            </p>
            <h1 className="matrix-glow-strong font-[family-name:var(--font-orbitron)] text-xl font-bold tracking-wider text-[var(--matrix-green)] sm:text-2xl">
              MORPHEUS
            </h1>
            <p className="mt-0.5 text-xs text-[var(--matrix-green-muted)] sm:text-sm">
              Mental Coach Protocol v1.0
            </p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-[10px] tracking-widest text-[var(--matrix-green-dim)] uppercase">
              Status
            </p>
            <p className="matrix-glow text-sm text-[var(--matrix-green)]">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--matrix-green)]" />{" "}
              ONLINE
            </p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="chat-scroll flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-enter matrix-border matrix-panel rounded-sm p-4 ${
                message.role === "user"
                  ? "ml-4 border-l-2 border-l-[var(--matrix-green)] sm:ml-12"
                  : message.role === "assistant"
                    ? "mr-4 border-l-2 border-l-[var(--matrix-green-dim)] sm:mr-12"
                    : "border-[var(--matrix-green-dim)]"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-[10px] tracking-widest uppercase">
                <span
                  className={
                    message.role === "user"
                      ? "text-[var(--matrix-green-glow)]"
                      : message.role === "assistant"
                        ? "text-[var(--matrix-green)]"
                        : "text-[var(--matrix-green-dim)]"
                  }
                >
                  {message.role === "user"
                    ? ">> OPERATOR"
                    : message.role === "assistant"
                      ? ">> MORPHEUS"
                      : ">> SYSTEM"}
                </span>
                <span className="text-[var(--matrix-green-muted)]">
                  [{formatTimestamp()}]
                </span>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--matrix-text)] sm:text-base">
                {message.content}
              </p>
            </div>
          ))}

          {isLoading && (
            <div className="message-enter matrix-border matrix-panel mr-4 rounded-sm border-l-2 border-l-[var(--matrix-green-dim)] p-4 sm:mr-12">
              <p className="mb-2 text-[10px] tracking-widest text-[var(--matrix-green)] uppercase">
                {">> MORPHEUS"}
              </p>
              <p className="matrix-glow text-sm text-[var(--matrix-green)]">
                Processing neural response
                <span className="cursor-blink">_</span>
              </p>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="matrix-border rounded-sm border-red-900/60 bg-red-950/30 p-4 text-red-400"
            >
              <p className="text-[10px] tracking-widest uppercase">
                {">> ERROR"}
              </p>
              <p className="mt-1 text-sm">{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input */}
      <footer className="matrix-border matrix-panel border-t px-4 py-4 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label
              htmlFor="matrix-input"
              className="mb-1.5 block text-[10px] tracking-widest text-[var(--matrix-green-dim)] uppercase"
            >
              Transmit Message
            </label>
            <textarea
              ref={inputRef}
              id="matrix-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
              rows={2}
              disabled={isLoading}
              className="matrix-border w-full resize-none rounded-sm bg-black/60 px-3 py-2.5 text-sm text-[var(--matrix-text)] placeholder:text-[var(--matrix-green-muted)] focus:border-[var(--matrix-green)] focus:outline-none focus:ring-1 focus:ring-[var(--matrix-green)] disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="pulse-glow shrink-0 rounded-sm border border-[var(--matrix-green)] bg-[var(--matrix-green-dim)]/30 px-6 py-2.5 font-[family-name:var(--font-orbitron)] text-xs font-bold tracking-[0.2em] text-[var(--matrix-green)] uppercase transition-colors hover:bg-[var(--matrix-green-dim)]/50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[var(--matrix-green-dim)]/30 sm:mb-0.5"
          >
            {isLoading ? "SYNC..." : "TRANSMIT"}
          </button>
        </form>
      </footer>
    </div>
  );
}
