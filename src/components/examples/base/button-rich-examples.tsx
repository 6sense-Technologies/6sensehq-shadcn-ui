import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCreditCard,
  IconDownload,
  IconStar,
  IconThumbUp,
} from "@tabler/icons-react"

import { RichButton, SocialIconButton } from "@/components/rich-button"

export function ButtonDashedExample() {
  return (
    <RichButton appearance="dashed" icon={IconDownload}>
      Download
    </RichButton>
  )
}

export function ButtonSocialContinueExample() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <RichButton appearance="social" icon={IconBrandGoogle}>
        Continue with Google
      </RichButton>
      <RichButton appearance="social" icon={IconBrandX}>
        Continue with X
      </RichButton>
      <RichButton appearance="social" icon={IconBrandFacebook}>
        Continue with Facebook
      </RichButton>
      <RichButton appearance="social" icon={IconBrandGithub}>
        Continue with GitHub
      </RichButton>
    </div>
  )
}

export function ButtonSocialIconsExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <SocialIconButton icon={IconBrandGoogle} label="Google" />
      <SocialIconButton icon={IconBrandFacebook} label="Facebook" />
      <SocialIconButton icon={IconBrandX} label="X" />
      <SocialIconButton icon={IconBrandGithub} label="GitHub" />
      <SocialIconButton icon={IconBrandLinkedin} label="LinkedIn" />
      <SocialIconButton icon={IconBrandInstagram} label="Instagram" />
    </div>
  )
}

export function ButtonCountExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <RichButton appearance="count" icon={IconThumbUp} count={456}>
        Like
      </RichButton>
      <RichButton
        appearance="count"
        variant="outline"
        icon={IconStar}
        count={589}
      >
        Star
      </RichButton>
    </div>
  )
}

export function ButtonSocialLoginExample() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <RichButton
        appearance="social"
        icon={IconBrandGoogle}
        prefix="Login with"
        className="rounded-full"
      >
        Google
      </RichButton>
      <RichButton
        appearance="social"
        icon={IconBrandX}
        prefix="Login with"
        className="rounded-full"
      >
        X
      </RichButton>
      <RichButton
        appearance="social"
        icon={IconBrandFacebook}
        prefix="Login with"
        className="rounded-full"
      >
        Facebook
      </RichButton>
      <RichButton
        appearance="social"
        icon={IconBrandGithub}
        prefix="Login with"
        className="rounded-full"
      >
        GitHub
      </RichButton>
    </div>
  )
}

export function ButtonChoiceExample() {
  return (
    <RichButton
      appearance="choice"
      icon={IconCreditCard}
      title="Credit Card"
      description="Pay securely with your Visa or Mastercard"
    />
  )
}
