"use client"

import * as React from "react"
import {
  ArrowUpIcon,
  BookOpenIcon,
  BrainIcon,
  ChevronDownIcon,
  CodeIcon,
  CompassIcon,
  CopyIcon,
  GlobeIcon,
  HistoryIcon,
  MicIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  PanelRightIcon,
  PaperclipIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  code?: {
    language: string
    source: string
  }
}

type ChatThread = {
  id: string
  title: string
  group: "Today" | "Yesterday" | "7 Days Ago"
  messages: ChatMessage[]
}

const threads: ChatThread[] = [
  {
    id: "1",
    title: "What's something you've learned recently?",
    group: "Today",
    messages: [
      { id: "m1", role: "user", content: "HI" },
      {
        id: "m2",
        role: "assistant",
        content:
          "Fetching data in Next.js using getServerSideProps is straightforward. Here's a basic example:",
        code: {
          language: "js",
          source: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
  };
}`,
        },
      },
      {
        id: "m3",
        role: "assistant",
        content:
          "This function runs on the server before rendering the page and provides `data` as props. It's ideal for dynamic data that changes often. Would you like to see an example using `getStaticProps` instead?",
      },
      { id: "m4", role: "user", content: "kya be" },
      {
        id: "m5",
        role: "assistant",
        content:
          "Fetching data in Next.js using getServerSideProps is straightforward. Here's a basic example:",
        code: {
          language: "js",
          source: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
  };
}`,
        },
      },
    ],
  },
  {
    id: "2",
    title: "Best travel experience",
    group: "Today",
    messages: [
      {
        id: "t1",
        role: "user",
        content: "What's the best travel experience you've heard of?",
      },
      {
        id: "t2",
        role: "assistant",
        content:
          "A standout one: slow-traveling through Japan by train, staying in small ryokans, and planning days around local food markets instead of attractions.",
      },
    ],
  },
  {
    id: "3",
    title: "Favorite book",
    group: "Today",
    messages: [],
  },
  {
    id: "4",
    title: "If you could teleport anywhere...",
    group: "Yesterday",
    messages: [],
  },
  {
    id: "5",
    title: "What's one goal you want to achieve?",
    group: "7 Days Ago",
    messages: [],
  },
  {
    id: "6",
    title: "Favorite programming language",
    group: "7 Days Ago",
    messages: [],
  },
  {
    id: "7",
    title: "Learning new skills",
    group: "7 Days Ago",
    messages: [],
  },
  {
    id: "8",
    title: "Weekend plans",
    group: "7 Days Ago",
    messages: [],
  },
  {
    id: "9",
    title: "Evening reflections",
    group: "7 Days Ago",
    messages: [],
  },
]

const groups = ["Today", "Yesterday", "7 Days Ago"] as const

const navItems = [
  { label: "Explore", icon: CompassIcon },
  { label: "Library", icon: BookOpenIcon },
  { label: "History", icon: HistoryIcon },
  { label: "Upgrade", icon: SparklesIcon },
]

const quickActions = [
  { label: "Summary", icon: BrainIcon },
  { label: "Code", icon: CodeIcon },
  { label: "Design", icon: PaletteIcon },
  { label: "Research", icon: GlobeIcon },
]

const models = ["Claude 3.5 Sonnet", "GPT-4o", "Gemini 1.5 Pro"]

function CodeBlock({ language, source }: { language: string; source: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-neutral-900 text-neutral-100">
      <div className="text-muted-foreground flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs">
        <span className="uppercase tracking-wide text-neutral-400">
          {language}
        </span>
        <button
          type="button"
          className="hover:text-foreground inline-flex items-center gap-1 text-neutral-400 transition-colors"
          onClick={() => navigator.clipboard?.writeText(source)}
        >
          <CopyIcon className="size-3.5" />
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code>{source}</code>
      </pre>
    </div>
  )
}

function ChatComposer({
  prompt,
  onPromptChange,
  model,
  onModelChange,
  onSend,
  compact,
}: {
  prompt: string
  onPromptChange: (value: string) => void
  model: string
  onModelChange: (value: string) => void
  onSend: () => void
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border bg-background shadow-sm",
        compact && "rounded-xl"
      )}
    >
      <div className="text-muted-foreground border-b bg-muted/30 px-4 py-2 text-xs sm:text-sm">
        Use our faster AI on Pro Plan •{" "}
        <button
          type="button"
          className="font-medium text-violet-600 hover:text-violet-700"
        >
          Upgrade
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <Textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Ask me anything..."
          className={cn(
            "resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0",
            compact ? "min-h-16" : "min-h-24"
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              onSend()
            }
          }}
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Attach file"
              className="size-8"
            >
              <PaperclipIcon className="size-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 gap-1.5 rounded-full px-2.5 text-xs font-normal"
                  />
                }
              >
                <GlobeIcon className="size-3.5" />
                <span className="max-w-[9rem] truncate">{model}</span>
                <ChevronDownIcon className="size-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuGroup>
                  {models.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onClick={() => onModelChange(item)}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Voice input"
              className="size-8 rounded-full"
            >
              <MicIcon className="size-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              aria-label="Send message"
              className="size-9 rounded-full bg-neutral-700 text-white hover:bg-neutral-800"
              onClick={onSend}
            >
              <ArrowUpIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatHistorySidebar({
  activeId,
  onSelect,
  onNewChat,
  query,
  onQueryChange,
}: {
  activeId: string | null
  onSelect: (id: string) => void
  onNewChat: () => void
  query: string
  onQueryChange: (value: string) => void
}) {
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return threads.filter((t) => !q || t.title.toLowerCase().includes(q))
  }, [query])

  return (
    <aside className="bg-background flex h-full w-full flex-col border-r">
      <div className="border-b p-3">
        <div className="relative">
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search chats..."
            className={cn("h-9 pl-8", query && "pr-8")}
          />
          {query ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onQueryChange("")}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 inline-flex size-5 -translate-y-1/2 cursor-pointer items-center justify-center"
            >
              <XIcon className="size-3.5" />
            </button>
          ) : null}
        </div>
      </div>

      <ScrollArea className="min-h-0 flex-1">
        <div className="px-2 py-3">
          {groups.map((group) => {
            const items = filtered.filter((t) => t.group === group)
            if (items.length === 0) return null
            return (
              <div key={group} className="mb-4">
                <p className="text-muted-foreground px-2 pb-1.5 text-xs font-medium">
                  {group}
                </p>
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(item.id)}
                        className={cn(
                          "group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors",
                          activeId === item.id
                            ? "bg-muted font-medium"
                            : "hover:bg-muted"
                        )}
                      >
                        <span className="min-w-0 flex-1 truncate">
                          {item.title}
                        </span>
                        <MoreHorizontalIcon className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </ScrollArea>

      <div className="mt-auto border-t p-2">
        <nav className="mb-2 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="hover:bg-muted text-foreground flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors"
            >
              <item.icon className="text-muted-foreground size-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t px-1 pt-2 pb-1">
          <Button
            type="button"
            onClick={onNewChat}
            className="h-10 w-full gap-1.5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800"
          >
            <PlusIcon className="size-4" />
            New Chat
          </Button>
        </div>
      </div>
    </aside>
  )
}

export function AiChatWorkspace() {
  const [activeId, setActiveId] = React.useState<string | null>("1")
  const [chatQuery, setChatQuery] = React.useState("")
  const [prompt, setPrompt] = React.useState("")
  const [model, setModel] = React.useState(models[0])
  const [localMessages, setLocalMessages] = React.useState<ChatMessage[]>([])
  const [historyOpen, setHistoryOpen] = React.useState(false)

  const activeThread = threads.find((t) => t.id === activeId) ?? null
  const isEmpty = activeId === null
  const messages = isEmpty
    ? localMessages
    : [...(activeThread?.messages ?? []), ...localMessages]

  const showConversation = messages.length > 0

  const send = () => {
    const text = prompt.trim()
    if (!text) return
    setLocalMessages((prev) => [
      ...prev,
      { id: `local-${Date.now()}`, role: "user", content: text },
      {
        id: `local-a-${Date.now()}`,
        role: "assistant",
        content:
          "Got it. Here's a concise take based on your message — tell me if you want more detail or a code sample.",
      },
    ])
    setPrompt("")
  }

  const startNewChat = () => {
    setActiveId(null)
    setLocalMessages([])
    setPrompt("")
    setHistoryOpen(false)
  }

  const selectThread = (id: string) => {
    setActiveId(id)
    setLocalMessages([])
    setPrompt("")
    setHistoryOpen(false)
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden rounded-xl border bg-background">
      <div className="hidden w-[17rem] shrink-0 md:block lg:w-[18rem]">
        <ChatHistorySidebar
          activeId={activeId}
          onSelect={selectThread}
          onNewChat={startNewChat}
          query={chatQuery}
          onQueryChange={setChatQuery}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b px-3 py-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={startNewChat}
            className="gap-1.5"
          >
            <PlusIcon className="size-3.5" />
            New
          </Button>
          <div className="min-w-0 flex-1 overflow-x-auto">
            <div className="flex gap-1">
              {threads.slice(0, 4).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => selectThread(t.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-2.5 py-1 text-xs",
                    activeId === t.id
                      ? "bg-muted font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {t.title.slice(0, 18)}…
                </button>
              ))}
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            aria-label="Open chat history"
            aria-expanded={historyOpen}
            onClick={() => setHistoryOpen(true)}
            className="shrink-0"
          >
            <PanelRightIcon className="size-4" />
          </Button>
        </div>

        <Sheet open={historyOpen} onOpenChange={setHistoryOpen}>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[18rem] gap-0 p-0 sm:max-w-[18rem]"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Chat history</SheetTitle>
            </SheetHeader>
            <ChatHistorySidebar
              activeId={activeId}
              onSelect={selectThread}
              onNewChat={startNewChat}
              query={chatQuery}
              onQueryChange={setChatQuery}
            />
          </SheetContent>
        </Sheet>

        {!showConversation ? (
          <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6">
            <div className="flex flex-col items-center gap-5 text-center">
              <div
                aria-hidden
                className="size-20 rounded-full opacity-90 shadow-[0_20px_50px_-12px_rgba(168,85,247,0.45)] sm:size-24"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, #fda4af 0%, #fb923c 35%, #c084fc 70%, #818cf8 100%)",
                }}
              />
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Good Morning, Toby
                </h1>
                <p className="text-xl font-medium tracking-tight sm:text-2xl">
                  How Can I{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Assist You Today?
                  </span>
                </p>
              </div>
            </div>

            <ChatComposer
              prompt={prompt}
              onPromptChange={setPrompt}
              model={model}
              onModelChange={setModel}
              onSend={send}
            />

            <div className="flex flex-wrap items-center justify-center gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  type="button"
                  variant="outline"
                  className="h-9 gap-1.5 rounded-full px-3.5 font-normal"
                  onClick={() =>
                    setPrompt(
                      prompt || `Help me with ${action.label.toLowerCase()}`
                    )
                  }
                >
                  <action.icon className="size-3.5" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="min-h-0 flex-1">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6">
                {messages.map((message) =>
                  message.role === "user" ? (
                    <div key={message.id} className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl bg-neutral-950 px-3.5 py-2 text-sm text-white sm:max-w-[70%]">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div key={message.id} className="flex justify-start">
                      <div className="bg-muted/60 max-w-[95%] space-y-3 rounded-2xl px-4 py-3 text-sm sm:max-w-[85%]">
                        <p className="leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                        {message.code ? (
                          <CodeBlock
                            language={message.code.language}
                            source={message.code.source}
                          />
                        ) : null}
                        <div className="flex items-center gap-1 pt-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label="Copy"
                          >
                            <CopyIcon />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label="Helpful"
                          >
                            <ThumbsUpIcon />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label="Not helpful"
                          >
                            <ThumbsDownIcon />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </ScrollArea>

            <div className="border-t bg-background px-3 py-3 sm:px-6 sm:py-4">
              <div className="mx-auto w-full max-w-3xl">
                <ChatComposer
                  prompt={prompt}
                  onPromptChange={setPrompt}
                  model={model}
                  onModelChange={setModel}
                  onSend={send}
                  compact
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
