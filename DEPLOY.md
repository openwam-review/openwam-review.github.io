# Deploy the anonymous project page

Publish this snapshot in a new repository owned by the anonymous account. Enable **Settings → Pages → Source: GitHub Actions**. The included workflow builds the site on pushes to `main`. Use `<anonymous-user>.github.io` for a root site, or any repository name for a project site; the workflow handles the base path.

Set the repository Actions variable `ANONYMOUS_CODE_URL` to the anonymous code repository URL. The workflow passes it as `NEXT_PUBLIC_CODE_URL`. If unset, code buttons are omitted.

For local builds:

```bash
NEXT_PUBLIC_CODE_URL=https://github.com/<anonymous-user>/code npm run build
# For a project site, also set NEXT_PUBLIC_BASE_PATH=/project-page.
```

Videos and posters are served from this repository. No analytics or external video hosts are configured. Do not attach a personal custom domain.
