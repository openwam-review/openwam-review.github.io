export const RESOURCE_LINKS = {
  code: {
    label: "Code",
    href: process.env.NEXT_PUBLIC_CODE_URL || "https://github.com/openwam-review/OpenWAM",
  },
};

export type ResourceLink = { label: string; href: string; pending?: boolean };
