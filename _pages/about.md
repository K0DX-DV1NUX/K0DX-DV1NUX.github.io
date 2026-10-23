---
layout: about
title: about
permalink: /
subtitle: PhD researcher · Long-term time series forecasting · Minimal-parameter models · TinyML

# TODO(Adi): add a profile photo by saving it as assets/img/prof_pic.jpg and uncommenting the block below.
# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false

selected_papers: false # turn on once _bibliography/papers.bib holds your own papers
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false

latest_posts:
  enabled: false
---

**[Download resume (PDF)]({{ '/assets/pdf/Aditya_Dey_Resume.pdf' | relative_url }})** · **[LinkedIn](https://www.linkedin.com/in/aditya-dey/)** · **[Google Scholar](https://scholar.google.com/citations?user=hga1oAMAAAAJ&hl=en)** · **[GitHub](https://github.com/K0DX-DV1NUX)**

I am a PhD researcher in long-term time series forecasting (LTSF). My thesis, _"Long Term Time Series Forecasting with Minimal Parameters for Higher Inference"_, asks how small a forecasting model can be. I design architectures with far fewer parameters, which lowers the FLOPs needed at test time and gives faster inference. The models also become small enough for the TinyML domain. Before the PhD I spent nine years as an IT and data consultant and completed an MSc in Data Science.

## Research

**Minimal-parameter architectures for LTSF.**
I build forecasting models from the ground up with a small parameter budget, measured in parameter count, FLOPs, inference speed and model size.

**Low-rank models.**
I use low-rank approximations to minimise weights, including LoRA, VeRA, Tied-LoRA and complex-valued LoRA, used as standalone models rather than as fine-tuning adapters.

**Knowledge distillation.**
I transfer what large foundation models and supervised models know into my lightweight models, so they stay accurate and become deployable.

**Time series analysis and signal processing.**
State-space equations, autocorrelation and cross-correlation, decomposition, Fourier and wavelet transforms, and seasonality extraction with structured matrices such as circulant matrices.

## Skills

- **Time series analysis:** state-space equations, autocorrelation, cross-correlation, decomposition, seasonality extraction with circulant matrices
- **Signal processing:** Discrete Fourier Transform (DFT), Discrete Cosine Transform (DCT), Discrete Wavelet Transform (DWT)
- **Parameter-efficient modelling:** low-rank approximation, LoRA, VeRA, Tied-LoRA, complex-valued LoRA, FLOP and parameter reduction, TinyML
- **Knowledge distillation:** from foundation and supervised teachers to lightweight students (online, offline, self-distillation)
- **Architectures:** RNN, LSTM, GRU, Echo State Network (ESN), TCN, MLP, self-attention, patch-based attention (PatchTST, iTransformer)
- **Battery modelling:** P2D lithium-ion models (DFN, SPMe, SPM), surrogate modelling
- **Research writing:** LaTeX, mathematical derivation and proof
- **Programming and ML tools:** Python, PyTorch, TensorFlow, Keras, scikit-learn, SciPy, NumPy, Git
- **Data engineering:** SQL (Oracle, MS SQL), PySpark, BigQuery, MongoDB, ETL pipelines, Power BI, AWS, GCP

## Education

- **PhD, [TODO(Adi): programme], [TODO(Adi): university]** | [TODO(Adi): Mon YYYY] – present<br>
  Thesis: _"Long Term Time Series Forecasting with Minimal Parameters for Higher Inference"_
- **MSc in Data Science, Norwegian University of Life Sciences (NMBU), Norway** | Aug 2021 – May 2023<br>
  Thesis on feature engineering for numerical and embedded features, with non-linear regression models (Random Forest, SVR, AdaBoost, XGBoost, neural networks), hyperparameter search, cross-validation and model explanation with partial dependence plots and SHAP.

## Consulting experience

Nine years as an IT and data consultant before the PhD, delivering data pipelines, databases, ETL and analytics for client organisations.

- **Data Analyst, Mastercard, India** | Sep 2019 – Aug 2021<br>
  Built data pipelines across BigQuery, Oracle SQL and PySpark, designed star and slowly changing dimension (SCD) schemas, and delivered Power BI reports with regression analyses for VPs and application leads.
- **Application Lead, Cognizant, India** | Sep 2018 – Sep 2019<br>
  Maintained Informatica ETL pipelines with SQL and Python, ran Python, Informatica and Oracle upgrades and migrations, and optimised existing queries.
- **Application Lead, LTIMindtree, India** | Aug 2012 – Sep 2018<br>
  Managed production releases, UAT and business sign-offs, and resolved defects in shell and Python scripts and Oracle PL/SQL.
