// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/types'
import type * as prismicClient from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *Layout → Navigation*
 */
export interface LayoutDocumentDataNavigationItem {
  /**
   * Label field in *Layout → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Layout → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Layout → Call to actions*
 */
export interface LayoutDocumentDataCallToActionsItem {
  /**
   * Label field in *Layout → Call to actions*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.call_to_actions[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Layout → Call to actions*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.call_to_actions[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * Style field in *Layout → Call to actions*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: primary
   * - **API ID Path**: layout.call_to_actions[].style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  style: prismic.SelectField<'primary' | 'secondary' | 'tertiary', 'filled'>
}

/**
 * Item in *Layout → Column 1*
 */
export interface LayoutDocumentDataColumn1Item {
  /**
   * Label field in *Layout → Column 1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_1[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Layout → Column 1*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_1[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Layout → Column 2*
 */
export interface LayoutDocumentDataColumn2Item {
  /**
   * Label field in *Layout → Column 2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_2[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Layout → Column 2*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_2[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Layout → Column 3*
 */
export interface LayoutDocumentDataColumn3Item {
  /**
   * Label field in *Layout → Column 3*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_3[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Layout → Column 3*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_3[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Layout documents
 */
interface LayoutDocumentData {
  /**
   * Navigation field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.navigation[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<LayoutDocumentDataNavigationItem>>

  /**
   * Call to actions field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.call_to_actions[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  call_to_actions: prismic.GroupField<
    Simplify<LayoutDocumentDataCallToActionsItem>
  > /**
   * Title field in *Layout*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.title_column_1
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_column_1: prismic.KeyTextField

  /**
   * Column 1 field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_1[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  column_1: prismic.GroupField<Simplify<LayoutDocumentDataColumn1Item>>

  /**
   * Title field in *Layout*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.title_column_2
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_column_2: prismic.KeyTextField

  /**
   * Column 2 field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_2[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  column_2: prismic.GroupField<Simplify<LayoutDocumentDataColumn2Item>>

  /**
   * Title field in *Layout*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.title_column_3
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_column_3: prismic.KeyTextField

  /**
   * Column 3 field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.column_3[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  column_3: prismic.GroupField<Simplify<LayoutDocumentDataColumn3Item>>
}

/**
 * Layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LayoutDocumentData>,
    'layout',
    Lang
  >

type PageDocumentDataSlicesSlice = SliderSlice | LogosSlice | HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>

export type AllDocumentTypes = LayoutDocument | PageDocument

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataNavigationItem,
      LayoutDocumentDataCallToActionsItem,
      LayoutDocumentDataColumn1Item,
      LayoutDocumentDataColumn2Item,
      LayoutDocumentDataColumn3Item,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes
    }
  }
}