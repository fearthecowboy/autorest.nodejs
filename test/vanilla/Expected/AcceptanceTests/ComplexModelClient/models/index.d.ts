/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the Product class.
 * @constructor
 * The product documentation.
 *
 * @member {string} [productId] Unique identifier representing a specific
 * product for a given latitude & longitude. For example, uberX in San
 * Francisco will have a different product_id than uberX in Los Angeles.
 * @member {string} [description] Description of product.
 * @member {string} [displayName] Display name of product.
 * @member {string} [capacity] Capacity of product. For example, 4 people.
 * Default value: '100' .
 * @member {string} [image] Image URL representing the product.
 */
export interface Product {
  productId?: string;
  description?: string;
  displayName?: string;
  capacity?: string;
  image?: string;
}

/**
 * @class
 * Initializes a new instance of the CatalogDictionary class.
 * @constructor
 * @member {object} [productDictionary] Dictionary of products
 */
export interface CatalogDictionary {
  productDictionary?: { [propertyName: string]: Product };
}

/**
 * @class
 * Initializes a new instance of the CatalogArray class.
 * @constructor
 * @member {array} [productArray] Array of products
 */
export interface CatalogArray {
  productArray?: Product[];
}

/**
 * @class
 * Initializes a new instance of the CatalogArrayOfDictionary class.
 * @constructor
 * @member {array} [productArrayOfDictionary] Array of dictionary of products
 */
export interface CatalogArrayOfDictionary {
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * @class
 * Initializes a new instance of the CatalogDictionaryOfArray class.
 * @constructor
 * @member {object} [productDictionaryOfArray] Dictionary of Array of product
 */
export interface CatalogDictionaryOfArray {
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {number} [status]
 * @member {string} [message]
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}
