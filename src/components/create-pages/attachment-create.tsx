"use client"

import * as React from "react"
import {
  FileIcon,
  FileTextIcon,
  ImageIcon,
  PaperclipIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FileItem = {
  id: string
  name: string
  meta: string
  kind: "image" | "pdf" | "doc"
  state: "uploading" | "done" | "error"
}

const seedFiles: FileItem[] = [
  {
    id: "1",
    name: "brief-overview.pdf",
    meta: "PDF · 420 KB",
    kind: "pdf",
    state: "done",
  },
  {
    id: "2",
    name: "moodboard.png",
    meta: "PNG · 1.8 MB",
    kind: "image",
    state: "done",
  },
  {
    id: "3",
    name: "requirements.docx",
    meta: "Uploading · 58%",
    kind: "doc",
    state: "uploading",
  },
]

function FileGlyph({ kind }: { kind: FileItem["kind"] }) {
  if (kind === "image") return <ImageIcon />
  if (kind === "pdf") return <FileTextIcon />
  return <FileIcon />
}

export function AttachmentCreateForm() {
  const [files, setFiles] = React.useState<FileItem[]>(seedFiles)
  const [title, setTitle] = React.useState("Q3 brand refresh request")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const onPickFiles = (list: FileList | null) => {
    if (!list?.length) return
    const next: FileItem[] = Array.from(list).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      meta: `${(file.size / 1024).toFixed(0)} KB · Ready`,
      kind: file.type.startsWith("image/")
        ? "image"
        : file.name.endsWith(".pdf")
          ? "pdf"
          : "doc",
      state: "done",
    }))
    setFiles((prev) => [...next, ...prev])
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create request
            </h1>
            <Badge variant="secondary" className="font-normal">
              Attachments
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Submit a request with supporting documents, images, and briefs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline">
            Save draft
          </Button>
          <Button
            type="submit"
            form="attachment-create-form"
            className="bg-sky-600 text-white hover:bg-sky-700"
          >
            Submit request
          </Button>
        </div>
      </div>

      <form
        id="attachment-create-form"
        className="overflow-hidden rounded-2xl border bg-background shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-6 p-5 sm:p-6">
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Request details</FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="req-title">Title</FieldLabel>
                  <Input
                    id="req-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel>Category</FieldLabel>
                    <Select
                      items={[
                        { label: "Design", value: "design" },
                        { label: "Engineering", value: "engineering" },
                        { label: "Marketing", value: "marketing" },
                      ]}
                      defaultValue="design"
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="engineering">
                            Engineering
                          </SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Priority</FieldLabel>
                    <Select
                      items={[
                        { label: "Low", value: "low" },
                        { label: "Normal", value: "normal" },
                        { label: "High", value: "high" },
                      ]}
                      defaultValue="normal"
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="req-summary">Summary</FieldLabel>
                  <Textarea
                    id="req-summary"
                    className="min-h-28"
                    placeholder="Describe the request, goals, and constraints"
                    defaultValue="We need updated brand assets for the Q3 launch, including logo variants and social templates."
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            <FieldSet>
              <FieldLegend className="flex items-center gap-2">
                <PaperclipIcon className="size-4" />
                Attachments
              </FieldLegend>
              <FieldDescription>
                Upload PDFs, images, or docs up to 25 MB each.
              </FieldDescription>

              <input
                ref={inputRef}
                type="file"
                multiple
                className="sr-only"
                onChange={(e) => {
                  onPickFiles(e.target.files)
                  e.target.value = ""
                }}
              />

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  onPickFiles(e.dataTransfer.files)
                }}
                className={cn(
                  "hover:bg-muted/40 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-10 text-center transition-colors"
                )}
              >
                <span className="bg-muted flex size-11 items-center justify-center rounded-full">
                  <UploadIcon className="text-muted-foreground size-5" />
                </span>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">
                    Drop files here or click to browse
                  </p>
                  <p className="text-muted-foreground text-xs">
                    PNG, JPG, PDF, DOCX · max 25 MB
                  </p>
                </div>
              </button>

              {files.length > 0 ? (
                <AttachmentGroup className="mt-1 flex w-full flex-col gap-2">
                  {files.map((file) => (
                    <Attachment
                      key={file.id}
                      state={file.state}
                      className="w-full max-w-none"
                    >
                      <AttachmentMedia>
                        {file.state === "uploading" ? (
                          <Spinner />
                        ) : (
                          <FileGlyph kind={file.kind} />
                        )}
                      </AttachmentMedia>
                      <AttachmentContent>
                        <AttachmentTitle>{file.name}</AttachmentTitle>
                        <AttachmentDescription>
                          {file.meta}
                        </AttachmentDescription>
                      </AttachmentContent>
                      <AttachmentActions>
                        <AttachmentAction
                          aria-label={`Remove ${file.name}`}
                          onClick={() => removeFile(file.id)}
                        >
                          <XIcon />
                        </AttachmentAction>
                      </AttachmentActions>
                    </Attachment>
                  ))}
                </AttachmentGroup>
              ) : null}
            </FieldSet>
          </FieldGroup>
        </div>
      </form>
    </div>
  )
}
