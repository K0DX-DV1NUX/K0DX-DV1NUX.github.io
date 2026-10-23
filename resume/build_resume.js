// Builds resume/Aditya_Dey_Resume.docx in the UiO CV template layout
// (date | role and description | institution), using tab stops instead of
// tables so ATS parsers read it in order. Run: node resume/build_resume.js
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType, TabStopType, BorderStyle, LevelFormat } = require("docx");

const FONT = "Calibri";
const TEXT_W = 11906 - 2 * 1418; // A4 width minus the template's side margins
const COL2 = 1900; // where role titles and descriptions start

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: 20, ...o });
const link = (text, url) => new ExternalHyperlink({ link: url, children: [run(text, { style: "Hyperlink" })] });

const name = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120 },
  children: [run("ADITYA DEY", { bold: true, size: 44 })],
});
const contact = (children) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children });

const heading = (text) =>
  new Paragraph({
    spacing: { before: 280, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    children: [run(text, { size: 24 })],
  });

// date <tab> title <tab> institution, then indented description lines
const entry = (dates, title, place, lines) => [
  new Paragraph({
    spacing: { before: 160, after: 20 },
    tabStops: [
      { type: TabStopType.LEFT, position: COL2 },
      { type: TabStopType.RIGHT, position: TEXT_W },
    ],
    children: [run(dates, { size: 18 }), run("\t"), run(title, { bold: true, size: 22 }), run("\t"), run(place, { size: 18 })],
  }),
  ...lines.map(
    (l) =>
      new Paragraph({
        indent: { left: COL2 },
        spacing: { after: 20 },
        children: Array.isArray(l) ? l : [run(l, { size: 19 })],
      })
  ),
];

const bullet = (label, text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 40 },
    children: label ? [run(label + ": ", { bold: true }), run(text)] : [run(text)],
  });

const doc = new Document({
  creator: "Aditya Dey",
  title: "Aditya Dey – CV",
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: { size: { width: 11906, height: 16838 }, margin: { top: 1300, bottom: 1300, left: 1418, right: 1418 } },
      },
      children: [
        name,
        contact([run("Norway")]),
        contact([run("E-mail: "), link("adiitya.dey@gmail.com", "mailto:adiitya.dey@gmail.com")]),
        contact([run("LinkedIn: "), link("linkedin.com/in/aditya-dey", "https://www.linkedin.com/in/aditya-dey/")]),
        contact([
          run("Google Scholar: "),
          link("scholar.google.com/citations?user=hga1oAMAAAAJ", "https://scholar.google.com/citations?user=hga1oAMAAAAJ&hl=en"),
        ]),
        contact([
          run("GitHub: "),
          link("github.com/K0DX-DV1NUX", "https://github.com/K0DX-DV1NUX"),
          run("  |  Website: "),
          link("k0dx-dv1nux.github.io", "https://k0dx-dv1nux.github.io"),
        ]),

        heading("PROFILE"),
        new Paragraph({
          spacing: { after: 40 },
          children: [
            run(
              "PhD researcher in long-term time series forecasting (LTSF), designing forecasting architectures with minimal " +
                "parameters so that they run faster at inference (fewer FLOPs) and are small enough for TinyML deployment. " +
                "Combines low-rank approximation (LoRA, VeRA, Tied-LoRA, complex-valued LoRA), knowledge distillation from " +
                "large foundation and supervised models, and signal processing. Brings nine years of IT and data consulting " +
                "and an MSc in Data Science."
            ),
          ],
        }),

        heading("EDUCATION"),
        ...entry("[Mon YYYY] – present", "PhD, [programme]", "[University]", [
          [
            run("Thesis: ", { size: 19 }),
            run("“Long Term Time Series Forecasting with Minimal Parameters for Higher Inference”", { italics: true, size: 19 }),
          ],
          "Designs LTSF architectures with fewer parameters to lower FLOPs and inference time and to shrink model size to the TinyML range.",
        ]),
        ...entry("Aug 2021 – May 2023", "Master of Science in Data Science", "NMBU, Norway", [
          "Thesis: feature engineering of numerical and embedded features for prediction with non-linear regression models " +
            "(Random Forest, SVR, AdaBoost, XGBoost, ANN); hyperparameter search, cross-validation, and model explanation with PDP and SHAP.",
          "Python with OOP and SOLID principles, tested with pytest and tox.",
        ]),

        heading("RESEARCH EXPERTISE"),
        bullet(
          "Parameter-efficient models",
          "low-rank approximation of weights; LoRA, VeRA, Tied-LoRA and complex-valued LoRA used as standalone forecasting models."
        ),
        bullet(
          "Knowledge distillation (KD)",
          "transfer from large foundation or supervised models to lightweight, deployable students (online, offline and self-distillation)."
        ),
        bullet(
          "Time series analysis",
          "state-space equations, autocorrelation and cross-correlation, decomposition, seasonality extraction with circulant matrices."
        ),
        bullet("Signal processing", "Discrete Fourier Transform (DFT), Discrete Cosine Transform (DCT), Discrete Wavelet Transform (DWT)."),
        bullet(
          "Architectures",
          "RNN, LSTM, GRU, Echo State Network (ESN), TCN, MLP, self-attention, patch-based attention (PatchTST, iTransformer)."
        ),
        bullet("Efficiency targets", "parameter count, FLOPs, inference latency and model size for TinyML and edge deployment."),
        bullet("Battery modelling", "P2D lithium-ion models (DFN, SPMe, SPM) and surrogate modelling."),

        heading("PUBLICATIONS"),
        bullet(null, "[Full citations with Aditya Dey in bold; see Google Scholar profile above]"),

        heading("CONSULTING EXPERIENCE"),
        ...entry("Sep 2019 – Aug 2021", "Data Analyst", "Mastercard, India", [
          "Built data pipelines combining BigQuery, Oracle SQL and PySpark; modelled star and SCD schemas.",
          "Planned and delivered Power BI reports with VPs and application leads, including regression analyses; validated data and reports monthly.",
        ]),
        ...entry("Sep 2018 – Sep 2019", "Application Lead", "Cognizant, India", [
          "Ran Master Data Management reporting across multiple databases and maintained Informatica ETL pipelines with SQL and Python.",
          "Led Python, Informatica and Oracle upgrades and migrations, and optimised existing queries to cut redundancy.",
        ]),
        ...entry("Aug 2012 – Sep 2018", "Application Lead", "LTIMindtree, India", [
          "Managed production, UAT and business sign-offs, and coordinated releases through CAB meetings.",
          "Resolved defects in shell and Python scripts and Oracle PL/SQL, using SQL tracing to locate faulty procedures and triggers.",
        ]),

        heading("LANGUAGE SKILLS"),
        bullet("English", "[level]"),
        bullet("Norwegian", "[level]"),

        heading("IT-SKILLS"),
        bullet("Programming and ML", "Python, PyTorch, TensorFlow, Keras, scikit-learn, SciPy, NumPy"),
        bullet("Data", "Oracle SQL, MS SQL, PySpark, BigQuery, MongoDB, Redis, Power BI, Matplotlib, Seaborn, Plotly"),
        bullet("Engineering", "Git, Bitbucket, Jenkins, Ansible, AWS, GCP, pytest, Agile Scrum"),
        bullet("Writing", "LaTeX"),

        heading("REFERENCES"),
        bullet(null, "Available upon request."),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = path.join(__dirname, "Aditya_Dey_Resume.docx");
  fs.writeFileSync(out, buf);
  console.log("wrote " + out);
});
