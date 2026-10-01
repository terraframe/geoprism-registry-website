---
layout: default
title: Features
nav_order: 3
---

# GeoPrism Registry Features
{: .no_toc }

This page describes the features of GeoPrism Registry 2.0. For step-by-step instructions see the [user documentation](https://docs.geoprismregistry.com/version/v2.0.0).
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


# System Management

## Localization
GeoPrism Registry can be localized to different languages for both application pages and data elements including:
* Geo-Object Types, Business Types, and Concepts
* Hierarchies
* Geo-Objects (including attributes)
* Lists

Locales are installed, translated through an exported spreadsheet, and imported back into the system. This makes it possible to navigate the system and record data in multiple languages, with full Unicode support.

## Organization Management
GeoPrism Registry supports the management of lists, spatial data, hierarchies, and business data across multiple organizations, so that only those with the responsibility to maintain data for a given organization can do so. Organizations can be arranged into a parent/child organization hierarchy.

## User Management
GeoPrism Registry supports management of users within and across organizations. Users can be added directly or invited by email, and accounts can be configured to log in through an external OAuth provider.

**User Roles Within Organizations:**
* Registry Administrator (RA): defines types, hierarchies, Concepts, and Business Types; registers external systems and synchronizations; assigns roles
* Registry Maintainer (RM): edits content directly, imports data, reviews change requests, and manages lists and historical events
* Registry Contributor (RC): views content and submits change requests

**User Roles Across Organizations:**
* System Administrator (SA): configures organizations, localization, branding, email, and type configuration import/export

## Email Notifications
GeoPrism Registry uses email settings to send notifications to users of the system, in particular account invitations and automated change request notifications.

## Branding
The system logo and branding can be customized for each installation.


# Configure
GeoPrism Registry is configured by defining the structure of the data before loading it. The recommended order is Source Authorities and Data Sources, then Concepts, then Geo-Object Types and hierarchies, then Business Types.

## Source Authorities
A Source Authority records who is responsible for a set of data, such as a government agency, statistical agency, mapping agency, research organization, NGO, or community organization. Source Authorities issue alternative IDs, which are stored alongside GeoPrism Registry codes and can be used to match records during import.

## Data Sources
A Data Source records the provenance of imported data, including its URI, governance level (Authoritative, Official, Community Curated, Research, Derived, Experimental, or Ad Hoc), and metadata profile (such as DCAT, GeoDCAT, ISO 19115, STAC, or FHIR). The Data Source is stored with every value it supplies for the period of validity of the import.

## Concepts
Concepts provide controlled vocabularies used to classify data.
* **Concept Classes** define the attributes of a kind of Concept.
* **Concept Edge Types** define relationships between Concepts, such as "Is A", to build taxonomies.
* **Concept Sets** are either flat enumerations or a branch of a taxonomy chosen from a root term.

A Geo-Object Type can be assigned a Concept Set, which adds a classification attribute to its Geo-Objects.

## Geo-Object Types
GeoPrism Registry organizes geographic data by Geo-Object Types, which are containers for Geo-Objects of the same kind that share the same data schema. Each type has a code, label, description, visibility (public or private), geometry type (point, line, polygon, or mixed), owning organization, and an optional Concept Set.

### Customization (e.g. custom attributes)
Geo-Object Types have default attributes and can be extended with custom attributes of the following types:
* Text
* Localized Text
* Integer
* Decimal
* Date
* Boolean

### Geo-Object Type Groups
Geo-Object Type Groups collect related types that share geometry type, visibility, attributes, and permissions. For example, a Health Facility group can contain Hospital, Health Centre, and Health Post types.

### Access and Management
All Geo-Object Types and groups are managed by organizations to ensure Geo-Objects are curated by authoritative groups. Organizations can set the visibility of types and groups to protect sensitive data.

## Hierarchies
Hierarchies are the formal definitions of how Geo-Object Types relate to each other as parents and children. They are built by drag and drop and carry their own metadata, such as progress, acknowledgement, disclaimer, access and use constraints, and contact information.

### Multiple Hierarchies
Geo-Object Types can participate in multiple hierarchies to fit different operational needs without duplicating Geo-Objects. Only the relationships are managed in each hierarchy, so each hierarchy can be queried independently. For example, a village can play a different role in a community health worker hierarchy than in an administrative hierarchy.

### Inheritance
Hierarchies can be shared across organizations using inheritance. Geo-Objects and the relationships between them are managed by an authoritative group while being extended by another organization's hierarchy.

## Graph Types
Not all relationships between places are hierarchical. Directed Acyclic Graph Types (for example, a river that flows into another river) and Undirected Graph Types (for example, districts that are adjacent to each other) relate Geo-Objects outside of a hierarchy.

## Business Types
Business Types manage non-geospatial data such as programs, staff, or survey results. Each Business Type has its own attributes, which can optionally change over time. Business Edge Types link business objects to each other or to Geo-Objects.

## Configuration-Based Setup
Geo-Object Types, hierarchies, graph types, Business Types, and Concepts can be defined in an XML configuration file and imported or exported, making it easy to reproduce a configuration across installations.


# Change Over Time
To maintain a single representation of a Geo-Object, changes are tracked through time for attributes, geometries, hierarchies, and graph relationships. Every value has a start and end date, and every Geo-Object records when it exists and whether it is valid over time. Historical views of data can be generated for any date.


# Curate

## Import Geospatial Data
Data imported to GeoPrism Registry is integrated into Geo-Object Types as Geo-Objects to maintain a single source of truth. Imports curate both Geo-Objects and their relationships in a hierarchy.

* **Spreadsheets** (XLS/XLSX) can include attribute data, coordinates for point data, and hierarchy levels recorded in columns.
* **Shapefiles** can include attribute data as well as point, line, or polygon geometries.

Each import is configured with an import strategy (new and update, new only, or update only), a period of validity, and a Data Source. Columns are mapped to attributes, alternative IDs are mapped to Source Authorities, and hierarchy columns are mapped to parent Geo-Object Types.

## Import Business Data
Spreadsheets of business objects or Concepts can be imported into Business Types and Concept Classes.

## Import Edge Data
Relationships of any kind (hierarchies, graph types, Business Edge Types, and Concept Edge Types) can be imported from JSON. Source and target objects can be matched by code or by alternative ID.

## Validation
All imports and updates are validated in multiple ways to maximize data integrity:

**Geo-Object Validation**
* Attribute type constraints are enforced, so only values that match the attribute's type can be imported.
* Geo-Objects can only be assigned to Geo-Object Types that are present in the hierarchy definition.
* Existing Geo-Objects are matched by code only; by code, label, or a synonym of a label; or by alternative ID.
* If an existing Geo-Object match is found on update, the time period must be valid.
* Duplicate Geo-Objects are not allowed in the same Geo-Object Type.
* Invalid geometries are reported.

**Relationship Validation**
* Parent matching ensures that matches are only created for Geo-Object Types that are above the target in the hierarchy.
* Parent matching validates that the parent exists in the system and is valid for the given time range.

## Scheduled Jobs
Imports run as scheduled jobs through file import, staging, validation, and database import stages. Problems such as unmatched parents or classifications can be resolved before the data is imported by creating synonyms, creating new options, ignoring rows, or re-uploading a corrected file.

## Rollback Data
Each import creates a rollback checkpoint. If a problem is found after an import, the data can be rolled back to the checkpoint, undoing that import and all later changes.

## Change Requests
Registry Contributors submit changes to Geo-Objects as change requests, which are reviewed by Registry Maintainers or Administrators. Reviewers can accept or reject each change individually, add notes, involve additional decision makers, and review attached reference documents.

## Historical Events
GeoPrism Registry captures changes to Geo-Objects such as splits, merges, reassignments, upgrades (moving up the hierarchy), and downgrades (moving down the hierarchy). Events record the Geo-Objects before and after the change and its impact, can be filtered by Geo-Object Type, and can be exported to a spreadsheet.


# Explore

## Explorer
The GeoPrism Registry Explorer allows for finding, viewing, comparing, and editing geospatial data.

* **View data spatially**: points, lines, and polygons can all be visualized and edited, with layers found by date range.
* **Context layers**: geospatial data from other lists in the system can be added to the map to build a more complete picture.
* **Edit Geo-Objects**: attributes, relationships, and geometries are editable through the Explorer. Edits by Registry Contributors become change requests.
* **Graph Visualizer**: relationships between Geo-Objects and business objects are displayed as an interactive graph and as relationship layers on the map.

## Lists and Spatial Data
Lists and spatial data are tabular and map views of Geo-Object data for a Geo-Object Type, generated for specific dates or periods.

* **Single date**: versions for a specific date.
* **Frequency based**: versions for every period across a time range (annual, biannual, quarterly, or monthly).
* **Period based**: versions for specific periods of time.

Each date or period has a **working version**, which reflects the current data and is the primary place to review or edit Geo-Objects, and any number of **published versions**, which are historical snapshots. List and spatial data metadata, visibility, and master status are managed separately for each version.

### Share Data
* **Lists** are exported to spreadsheet with associated metadata and a data dictionary.
* **Geospatial data** is exported to shapefile with associated metadata, which can be viewed in other mapping software such as QGIS.

## Spatial Knowledge Graphs
A Spatial Knowledge Graph (SKG) bundles Geo-Object Types, hierarchies, graph types, Business Types, Business Edge Types, and their Concepts for a period of validity. Publishing an SKG creates an incremental, RDF-based version that is delivered to external systems through synchronization. SKGs replace the older Labeled Property Graph export.


# External System Integration
GeoPrism Registry integrates with external systems to exchange data.

**Supported Integrations**
* **Apache Jena**: published Spatial Knowledge Graphs are synchronized to a named graph in a SPARQL triple store, such as Apache Jena Fuseki or Amazon Neptune (with IAM authentication).
* **Fast Healthcare Interoperability Resources® (FHIR)**: lists are exported to a FHIR server using basic or IHE Mobile Care Services Discovery (mCSD) profiles. Custom FHIR import and export implementations can be added as plugins.

## REST API
GeoPrism Registry provides a REST API for reading and working with registry data, including lookup by external system identifiers. Public data is available through the API to any deployment. See the [API documentation](https://api.geoprismregistry.com/).
