export const RESOURCE_LINKS = {
  models: {
    label: "Hugging Face",
    href: "https://huggingface.co/openwam-review/OpenWAM-Alpha-Checkpoints",
  },
  code: {
    label: "Code",
    href: process.env.NEXT_PUBLIC_CODE_URL || "https://github.com/openwam-review/OpenWAM",
  },
};

export type ResourceLink = { label: string; href: string; pending?: boolean };
