# Resume source

`Aditya_Dey_Resume.docx` is the CV, laid out like the UiO CV template (date, role, institution) but built with tab stops instead of tables so ATS parsers read it in order. The site's download button serves the PDF export at `assets/pdf/Aditya_Dey_Resume.pdf`.

To change the CV, edit the content in `build_resume.js`, then regenerate both files from the repo root:

```bash
node resume/build_resume.js
soffice --headless --convert-to pdf --outdir assets/pdf resume/Aditya_Dey_Resume.docx
```

This folder is listed under `exclude:` in `_config.yml`, so Jekyll does not publish it.
