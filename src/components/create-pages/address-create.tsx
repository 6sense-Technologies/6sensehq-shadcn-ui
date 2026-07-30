"use client"

import * as React from "react"
import { MapPinnedIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Switch } from "@/components/ui/switch"

export function AddressCreateForm() {
  const [company, setCompany] = React.useState("Northwind Labs")
  const [line1, setLine1] = React.useState("500 Market Street")
  const [line2, setLine2] = React.useState("Suite 1200")
  const [city, setCity] = React.useState("San Francisco")
  const [state, setState] = React.useState("CA")
  const [zip, setZip] = React.useState("94105")
  const [country, setCountry] = React.useState("US")
  const [sameAsBilling, setSameAsBilling] = React.useState(true)

  const previewLines = [
    company,
    line1,
    line2,
    [city, state].filter(Boolean).join(", ") + (zip ? ` ${zip}` : ""),
    country === "US"
      ? "United States"
      : country === "CA"
        ? "Canada"
        : country === "GB"
          ? "United Kingdom"
          : country,
  ].filter((line) => line.trim())

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create location
            </h1>
            <Badge variant="secondary" className="font-normal">
              Address
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            Add a business location with contact and full mailing address.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button
            type="submit"
            form="address-create-form"
            className="bg-sky-600 text-white hover:bg-sky-700"
          >
            Create location
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <form
          id="address-create-form"
          className="overflow-hidden rounded-2xl border bg-background shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6 p-5 sm:p-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Business details</FieldLegend>
                <FieldDescription>
                  Shown on invoices, shipping labels, and location cards.
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="company-name">
                      Company / location name
                    </FieldLabel>
                    <Input
                      id="company-name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="contact-name">
                        Contact name
                      </FieldLabel>
                      <Input
                        id="contact-name"
                        placeholder="Alex Morgan"
                        defaultValue="Alex Morgan"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (415) 555-0132"
                        defaultValue="+1 (415) 555-0132"
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="ops@northwind.example"
                      defaultValue="ops@northwind.example"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <FieldLegend>Address</FieldLegend>
                <FieldDescription>
                  Use the postal format for the selected country.
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="address-line1">
                      Address line 1
                    </FieldLabel>
                    <Input
                      id="address-line1"
                      placeholder="Street address"
                      value={line1}
                      onChange={(e) => setLine1(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="address-line2">
                      Address line 2
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        (optional)
                      </span>
                    </FieldLabel>
                    <Input
                      id="address-line2"
                      placeholder="Apartment, suite, unit, building"
                      value={line2}
                      onChange={(e) => setLine2(e.target.value)}
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="address-city">City</FieldLabel>
                      <Input
                        id="address-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="address-state">
                        State / Province
                      </FieldLabel>
                      <Input
                        id="address-state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="address-zip">
                        ZIP / Postal code
                      </FieldLabel>
                      <Input
                        id="address-zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Country</FieldLabel>
                      <Select
                        items={[
                          { label: "United States", value: "US" },
                          { label: "Canada", value: "CA" },
                          { label: "United Kingdom", value: "GB" },
                          { label: "Australia", value: "AU" },
                          { label: "Germany", value: "DE" },
                        ]}
                        value={country}
                        onValueChange={(v) =>
                          setCountry((v as string) ?? "US")
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="CA">Canada</SelectItem>
                            <SelectItem value="GB">United Kingdom</SelectItem>
                            <SelectItem value="AU">Australia</SelectItem>
                            <SelectItem value="DE">Germany</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <FieldLegend>Shipping & billing</FieldLegend>
                <FieldGroup>
                  <Field orientation="horizontal" className="items-center">
                    <FieldLabel htmlFor="same-billing" className="flex-1">
                      Billing address same as shipping
                      <FieldDescription>
                        Use this location for invoices and tax estimates.
                      </FieldDescription>
                    </FieldLabel>
                    <Switch
                      id="same-billing"
                      checked={sameAsBilling}
                      onCheckedChange={setSameAsBilling}
                    />
                  </Field>
                  <label
                    htmlFor="default-location"
                    className="hover:bg-muted/40 flex cursor-pointer items-start gap-3 rounded-xl border p-4"
                  >
                    <Checkbox
                      id="default-location"
                      defaultChecked
                      className="mt-0.5"
                    />
                    <span>
                      <span className="block text-sm font-medium">
                        Set as default location
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Prefill checkout and shipping for this account.
                      </span>
                    </span>
                  </label>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </div>
        </form>

        <aside className="h-fit rounded-2xl border bg-background p-5 shadow-sm lg:sticky lg:top-20 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
              <MapPinnedIcon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium">Address preview</p>
              <p className="text-muted-foreground text-xs">Mailing format</p>
            </div>
          </div>
          <address className="bg-muted/30 not-italic rounded-xl border px-4 py-3 text-sm leading-relaxed">
            {previewLines.length > 0 ? (
              previewLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))
            ) : (
              <span className="text-muted-foreground">
                Enter an address to preview
              </span>
            )}
          </address>
          <p className="text-muted-foreground mt-4 text-xs">
            {sameAsBilling
              ? "Billing will use this same address."
              : "Add a separate billing address after create."}
          </p>
        </aside>
      </div>
    </div>
  )
}
