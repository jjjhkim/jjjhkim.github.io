# Junhyeong Kim — GitHub Pages academic website

A static academic website generated from `CV_Junhyeong_Kim.tex` and the accompanying BibTeX files.

## Pages

- `index.html` — profile, research, appointments, education, projects, awards, recent work, contact
- `publications.html` — searchable/filterable publication list
- `patents.html` — searchable/filterable U.S. patent/application list
- `cv/CV_Junhyeong_Kim.pdf` — downloadable CV

## Publish on GitHub Pages

1. Create a public GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload the **contents of this folder** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. The site will appear at `https://YOUR_GITHUB_USERNAME.github.io/`.

For a project repository instead of a user site, GitHub Pages also works under `https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/` because the site uses relative asset links.

## Update publications / patents

The generated website currently embeds the publication and patent data in `assets/js/data.js`. Re-run the site generator from the original CV source when the BibTeX data changes, or edit the data file carefully.

## Privacy choice

The source CV contains mobile and office telephone numbers. The public website intentionally omits the mobile number and displays email, affiliation, address, Google Scholar, and CV links. Add a phone number to `index.html` only if you want it public.

## Optional profile photo

The design currently uses a clean `JK` monogram instead of a photograph. If desired, replace the monogram in `index.html` with an `<img>` tag and add a photo under `assets/img/`.
