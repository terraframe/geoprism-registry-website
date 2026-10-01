---
layout: default
title: Overview
nav_order: 2
---

# GeoPrism Registry Overview
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

[![DPG Badge](https://img.shields.io/badge/Verified-DPG-3333AB?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMSAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjIwMDggMjEuMzY3OEwxMC4xNzM2IDE4LjAxMjRMMTEuNTIxOSAxNi40MDAzTDEzLjk5MjggMTguNDU5TDE5LjYyNjkgMTIuMjExMUwyMS4xOTA5IDEzLjYxNkwxNC4yMDA4IDIxLjM2NzhaTTI0LjYyNDEgOS4zNTEyN0wyNC44MDcxIDMuMDcyOTdMMTguODgxIDUuMTg2NjJMMTUuMzMxNCAtMi4zMzA4MmUtMDVMMTEuNzgyMSA1LjE4NjYyTDUuODU2MDEgMy4wNzI5N0w2LjAzOTA2IDkuMzUxMjdMMCAxMS4xMTc3TDMuODQ1MjEgMTYuMDg5NUwwIDIxLjA2MTJMNi4wMzkwNiAyMi44Mjc3TDUuODU2MDEgMjkuMTA2TDExLjc4MjEgMjYuOTkyM0wxNS4zMzE0IDMyLjE3OUwxOC44ODEgMjYuOTkyM0wyNC44MDcxIDI5LjEwNkwyNC42MjQxIDIyLjgyNzdMMzAuNjYzMSAyMS4wNjEyTDI2LjgxNzYgMTYuMDg5NUwzMC42NjMxIDExLjExNzdMMjQuNjI0MSA5LjM1MTI3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)](https://digitalpublicgoods.net/r/geoprism-registry)

GeoPrism Registry is certified as a Digital Public Good (DPG) of the Digital Public Goods Alliance.

# Capabilities

GeoPrism Registry provides a unique set of data management capabilities to contextualize data from different sources in both space and time, facilitate trend analysis, aggregate data according to different hierarchies, use geographic objects as the common link between data sources, and publish trusted knowledge graphs for applications, analytics, and AI.

The capabilities are organized around four activities:

* **Model your data.** Define Geo-Object Types and the hierarchies and graphs that link them, classify Geo-Objects with Concepts, and add non-geospatial data with Business Types.
* **Load and maintain data.** Import spreadsheets, shapefiles, and relationships, review changes through change requests, record historical events such as mergers and splits, and roll back imports if needed.
* **Explore and share data.** View Geo-Objects and their relationships on a map, publish lists and spatial data for a date or period, and publish Spatial Knowledge Graphs.
* **Connect other systems.** Share data with external systems such as Apache Jena and FHIR, or use the REST API.

## Spatial Knowledge Graphs

GeoPrism Registry manages geographic data as interconnected knowledge. Geo-Objects, business data, and concepts are linked through hierarchies, graph relationships, and classifications, and can be published as versioned, RDF-based Spatial Knowledge Graphs (SKG). Published graphs are synchronized incrementally to external triple stores, giving applications and AI systems structured, versioned data they can query and trace back to its source.

## Multiple Hierarchy Management

GeoPrism Registry provides a multi-organization environment that supports data governance among these organizations. At the same time, it manages data dependencies between organizations. Data are curated by the organization with the authoritative mandate, and hierarchies can be inherited and extended by other organizations without duplicating Geo-Objects.

## Change Over Time

GeoPrism Registry tracks attributes, geometries, and relationships (including hierarchies and graph relationships) between geographic objects as they change over time. Historical views of data can be generated for any point or period in time.

## Provenance and Authority

Every imported value can be attributed to a Data Source, with its governance level and metadata profile, and to the Source Authority responsible for it. Alternative IDs issued by each Source Authority are stored alongside GeoPrism Registry codes, so records can be matched across systems that use different identifiers.

## Integrating Official and Unofficial Data

Data curated by official and unofficial groups can be harmonized to create a more complete picture of available data, while governance levels make clear which data is authoritative, official, community curated, or derived.

## Accessibility

Each organization can decide if the content it manages can be accessed outside of the organization. Lists and spatial data can be published for different dates or periods based on a given frequency, and historical versions are maintained for reference.

## Historical Events

GeoPrism Registry captures the information needed to rebuild how geographic objects like administrative units have evolved through time by being split, merged, reassigned, upgraded, or downgraded. This information presents an accurate historical picture that is key to trend analysis.

## Updating Mechanism

GeoPrism Registry operationalizes the updating mechanism associated with each geographic object it covers by providing a change management workflow that allows authorized users to submit change requests for approval. Imports are validated before they reach the database, and each import can be rolled back if a problem is found later.
