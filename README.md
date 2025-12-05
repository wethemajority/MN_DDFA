# DDFA Landing Page

This repository hosts the public landing page for the **Data Distribution Fairness Act (DDFA)** movement.

When deployed on GitHub Pages, your site will be live at:

```text
https://YOUR-GITHUB-USERNAME.github.io/DDFA/
```

_Update the repo name or path if you choose something different._

---

## Files

- `index.html` – Main landing page
- `style.css` – Styling (dark/light theme, layout, animations)
- `script.js` – Theme toggle and signature bar logic
- `assets/banner.png` – Your DDFA banner image (you add this)
- `assets/favicon.svg` – Browser tab icon
- `MN_DDFA_Option1_HouseStyle.pdf` – Minnesota bill draft (add from your PDF)

---

## Petition Link

All "Sign the Petition" buttons point to:

https://change.org/p/pass-the-ddfa-data-distribution-fairness-act

If the URL changes, open `index.html` and search for `change.org` to update it.

---

## Signature Widget

The signature widget is manual (Change.org does not expose a simple live API).

To update it:

1. Open `index.html`.
2. Find:

   ```html
   <span id="sigCurrent" data-target-count="5">5</span>
   <span id="sigGoal">5000</span>
   ```

3. Change `data-target-count` and the inner text `5` to your latest signature count.
4. Change `5000` if you want a different goal.
5. Commit and push. The progress bar will automatically resize based on the new ratio.

---

## How to Enable GitHub Pages

1. Create a new **public** repository on GitHub, for example: `DDFA`.
2. Upload all files from this folder to the **root** of the repo:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - folder: `assets/`
   - file: `MN_DDFA_Option1_HouseStyle.pdf`
3. Commit the changes.

Then:

1. In the repo, click **Settings**.
2. Scroll down to **Pages** in the left sidebar.
3. Under **Source**, choose:
   - Branch: `main`
   - Folder: `/root`
4. Click **Save**.

After a minute or two, GitHub will show your live URL near the top of the Pages section.

---

## Editing Text and Content

Open `index.html` in any text editor and look for:

- Hero paragraph — adjust the tone or details.
- Digital rights bullet lists — add/remove items.
- Updates / Movement Log — replace with real milestones and dates.

You do **not** need any build tools. This is a static site.

---

## Dark / Light Mode

The page starts in dark mode by default. Users can toggle using the button in the header.

To default to light mode instead, change:

```html
<html lang="en" data-theme="dark">
```

to:

```html
<html lang="en" data-theme="light">
```

Save, commit, and push.

---

## Assets You Must Provide

- `assets/banner.png` – export your DDFA "Pass the DDFA (Act)" banner image and place it in the `assets` folder with this exact file name.
- `MN_DDFA_Option1_HouseStyle.pdf` – the Minnesota House–style bill draft you will hand to lawmakers.

Once those are in place and GitHub Pages is enabled, your site is ready to share.
