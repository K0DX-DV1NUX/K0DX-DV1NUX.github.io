---
layout: about
title: about
permalink: /
subtitle: PhD researcher in machine learning · Long-term time series forecasting · Battery modelling · Parameter-space reduction

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

I am a PhD researcher in machine learning who builds small models that still forecast well, after nine years as an IT and data consultant and an MSc in Data Science. My work covers two areas, long-term time series forecasting (LTSF) and physics-based lithium-ion battery modelling. Both come down to the same question: how many parameters does a model really need? I answer it with signal processing, linear algebra and knowledge distillation. The goal is models compact enough for TinyML and edge hardware that keep the accuracy of much larger ones.

## Research

**Long-term time series forecasting with compact models.**
I work with Transformer forecasters such as PatchTST and iTransformer and try to shrink them. Patching, frequency-domain representations (DFT, DCT, DWT), convolutional attention and low-rank approximations of the weight matrices all cut the parameter space. Knowledge distillation (online, offline and self-distillation) moves what a large teacher knows into a small student.

**Surrogate models of battery electrochemistry.**
I study the pseudo-two-dimensional (P2D) family of lithium-ion battery models: the Doyle–Fuller–Newman (DFN) model, the Single Particle Model with electrolyte (SPMe) and the Single Particle Model (SPM). I build data-driven and state-space surrogates that reproduce their behaviour at a fraction of the cost, so they can run where a full P2D solver cannot.

**Parameter-space reduction** connects the two: finding the smallest representation of a model that keeps the accuracy that matters.

## Skills

- **Time series forecasting:** long-term time series forecasting (LTSF), PatchTST, iTransformer, Transformers, patching
- **Model compression:** parameter-space reduction, low-rank approximation, knowledge distillation (online, offline, self), convolutional attention, TinyML
- **Signal processing:** Discrete Fourier Transform (DFT), Discrete Cosine Transform (DCT), Discrete Wavelet Transform (DWT)
- **Modelling:** state-space models, surrogate modelling, P2D battery models (DFN, SPMe, SPM)
- **Research writing:** LaTeX, mathematical derivation and proof
- **Programming and ML tools:** Python, PyTorch, TensorFlow, Keras, scikit-learn, SciPy, Git <!-- TODO(Adi): confirm PyTorch and add PhD tools such as PyBaMM if used -->
- **Data engineering:** SQL (Oracle, MS SQL), PySpark, BigQuery, MongoDB, ETL pipelines, Power BI, AWS, GCP

## Education

- **PhD, [TODO(Adi): programme], [TODO(Adi): university]** | [TODO(Adi): Mon YYYY] – present<br>
  Thesis topic: [TODO(Adi): working title, e.g. compact models for long-term time series forecasting and battery surrogate modelling]
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
