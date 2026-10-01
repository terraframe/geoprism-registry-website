---
layout: default
title: Home
nav_order: 1
description: "An open-source platform for curating, governing, and sharing time-aware geospatial knowledge."
permalink: /
---

# GeoPrism Registry (GPR)
{: .fs-9 }

An open-source platform for curating, governing, and sharing time-aware geospatial knowledge, with common geographies, common IDs, and provenance.
{: .fs-6 .fw-300 }

[Documentation](https://docs.geoprismregistry.com/version/v2.0.0){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/terraframe/geoprism-registry){: .btn .fs-5 .mb-4 .mb-md-0 }

---

[![DPG Badge](https://img.shields.io/badge/Verified-DPG-3333AB?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMSAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjIwMDggMjEuMzY3OEwxMC4xNzM2IDE4LjAxMjRMMTEuNTIxOSAxNi40MDAzTDEzLjk5MjggMTguNDU5TDE5LjYyNjkgMTIuMjExMUwyMS4xOTA5IDEzLjYxNkwxNC4yMDA4IDIxLjM2NzhaTTI0LjYyNDEgOS4zNTEyN0wyNC44MDcxIDMuMDcyOTdMMTguODgxIDUuMTg2NjJMMTUuMzMxNCAtMi4zMzA4MmUtMDVMMTEuNzgyMSA1LjE4NjYyTDUuODU2MDEgMy4wNzI5N0w2LjAzOTA2IDkuMzUxMjdMMCAxMS4xMTc3TDMuODQ1MjEgMTYuMDg5NUwwIDIxLjA2MTJMNi4wMzkwNiAyMi44Mjc3TDUuODU2MDEgMjkuMTA2TDExLjc4MjEgMjYuOTkyM0wxNS4zMzE0IDMyLjE3OUwxOC44ODEgMjYuOTkyM0wyNC44MDcxIDI5LjEwNkwyNC42MjQxIDIyLjgyNzdMMzAuNjYzMSAyMS4wNjEyTDI2LjgxNzYgMTYuMDg5NUwzMC42NjMxIDExLjExNzdMMjQuNjI0MSA5LjM1MTI3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://digitalpublicgoods.net/r/geoprism-registry)

GeoPrism Registry is certified as a Digital Public Good (DPG) of the Digital Public Goods Alliance.

## Documentation

- [User Documentation (v2.0.0)](https://docs.geoprismregistry.com/version/v2.0.0)
- [Installation Documentation (with Docker)](https://docs.geoprismregistry.com/version/v2.0.0/deployment-and-setup/creating-a-new-installation)
- [API Documentation](https://api.geoprismregistry.com/)
- [Common Geo-Registry Specification](https://github.com/terraframe/common-geo-registry-specification)

---

## About
Location and time are dimensions that bind information together.

GeoPrism Registry manages geographic data as interconnected knowledge rather than as isolated datasets. It maintains an authoritative registry of geographic objects (administrative areas, settlements, health facilities, schools, and other physical and non-physical features) together with their hierarchies, geometries, attributes, relationships, and full history. Because every value is tracked through time, historical data is always interpreted against the geography that was valid at the time.

This curated, versioned knowledge can be queried and traced back to its source by people, information systems, and AI. Language models have no reliable knowledge of which places exist, how they relate to each other, or how they have changed. GeoPrism Registry acts as a translation layer that brings time-aware geographic data into AI while maintaining high quality, common geographies, common IDs, and provenance.

Collaboration across sectors is needed to promote public health, economic development, environmental protection, disaster recovery, education, agriculture, infrastructure, and other public and private services. GeoPrism Registry lets multiple organizations each curate the data they are mandated to maintain, while sharing it through common identifiers and semantics.

---

## What's new in GeoPrism Registry 2.0

- **Spatial Knowledge Graphs (SKG)**: publish versioned, RDF-based knowledge graphs of your geographic, business, and concept data, and synchronize them to triple stores such as Apache Jena or Amazon Neptune.
- **Concepts**: controlled vocabularies (Concept Classes, Concept Edge Types, and Concept Sets) for classifying Geo-Objects and modeling taxonomies.
- **Business Types**: manage non-geospatial data such as programs, staff, or survey results and link it to Geo-Objects.
- **Graph types**: directed acyclic and undirected graph relationships between Geo-Objects (for example, rivers that flow into each other or areas that are adjacent), beyond strict hierarchies.
- **Provenance**: Source Authorities and Data Sources record who is responsible for data and where every imported value came from, including alternative IDs issued by each authority.
- **Rollback**: every import creates a checkpoint that can be rolled back.
- **Graph Visualizer**: explore relationships between Geo-Objects and business objects directly in the Explorer.
- **Modernized platform**: Java 17, Spring Boot, Tomcat 11, Angular 19, PostgreSQL 18 / PostGIS 3.6, and OrientDB 3.2.

See the [Features](/docs/features/) page for more detail.

---

## GeoPrism Registry as a CGR

GeoPrism Registry is the first open-source implementation of a Common Geo-Registry (CGR): a single, reliable source of geographic data that any information system can use. It is used to host, manage, regularly update, and share lists, hierarchies, and geospatial data through time for the geographic objects core to spatial data infrastructure, sustainable development, and public health.

The [CGR vision specification](https://healthgeolab.net/DOCUMENTS/Guidance_Common_Geo-registry_Ve2.pdf) is a long term vision of Health GeoLab Collaborative. The GeoPrism Registry implementation is developed in partnership with Health GeoLab Collaborative, Clinton Health Access Initiative, Vital Wave, and other Digital Solutions For Malaria Elimination (DSME) community partners.

---

# Enables geospatial initiatives and infrastructures

## [Geospatial Knowledge Infrastructure (GKI)](https://geospatialmedia.net/pdf/GKI-White-Paper.pdf)

GeoPrism Registry is a foundational component of a Geospatial Knowledge Infrastructure. It produces trusted, AI-ready knowledge graphs while enabling organizations to retain sovereignty over both their data and the knowledge that powers their AI systems.

## [Integrated Geographic Information Framework (IGIF)](https://ggim.un.org/IGIF/)

At the technical level, GeoPrism Registry contributes to the standards strategic pathway of the
IGIF by supporting data interoperability.

## [Global Statistical Geospatial Framework (GSGF)](https://unstats.un.org/unsd/statcom/51st-session/documents/The_GSGF-E.pdf)

GeoPrism Registry supports the operationalization of the first three principles of the GSGF: 1.
Use of fundamental geospatial infrastructure and geocoding; 2. Geocoded unit record data in a
data management environment; 3. Common geographies for the dissemination of statistics.

## Health Information Exchange (HIE)

GeoPrism Registry strengthens HIEs and disease intervention programs by enabling data interoperability across health information systems using common geographies, and by managing multiple organizational hierarchies and relationships between locations as they change over time, which is essential for microplanning and trend analysis. GeoPrism Registry supports Fast Healthcare Interoperability Resources (FHIR), including export using the IHE Mobile Care Services Discovery (mCSD) profile, and provides a RESTful API.

## National Spatial Data Infrastructure (NSDI)

GeoPrism Registry supports the operationalization of the National Spatial Data Infrastructure (NSDI) to host, manage, regularly update, and share the lists, hierarchies, and spatial data needed to properly contextualize any data or information attached to core geographic objects, while respecting the curation mandate of the organizations officially in charge of this data and information.

## Sustainable Development Goals

GeoPrism Registry helps address the geographic dimension of the Sustainable Development Goals (SDG) by providing a common geography to support cross-sectoral planning and decision making.

## Open Source

GeoPrism Registry is released under the GNU Lesser General Public License (LGPL) and is built entirely from open-source components, including OpenJDK, Spring Boot, Apache Tomcat, Angular, MapLibre GL, PostgreSQL/PostGIS, OrientDB, and Apache Jena. GeoPrism Registry is distributed as a Docker image and can be deployed in the cloud or on premises.

---

## License

GeoPrism Registry is open sourced under the [GNU Lesser General Public License](https://github.com/terraframe/geoprism-registry/blob/master/LICENSE).

## Contributing

- For code contributions please see the [Contribution Guidelines](https://github.com/terraframe/geoprism-registry/wiki/Contribution-Guidelines) and [Governance](https://github.com/terraframe/geoprism-registry/wiki/Governance) pages on the project wiki.
- Report issues on the [GitHub project board](https://github.com/orgs/terraframe/projects/2).

## Code of Conduct

[View our Code of Conduct](https://github.com/terraframe/geoprism-registry/blob/master/code-of-conduct.md) on our GitHub repository.
