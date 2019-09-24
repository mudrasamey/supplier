<?php

namespace Drupal\suppliermonitoring\Plugin\views\field;

/**
 * @file
 * Definition of Drupal\d8views\Plugin\views\field\NodeTypeFlagger.
 */

use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * Field handler to flag the node type.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("node_resource_availability")
 */
class ResourceAvailability extends FieldPluginBase {

  /**
   * Query for view handler.
   *
   * @{inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * Render for field handler.
   *
   * @{inheritdoc}
   */
  public function render(ResultRow $values) {
    return suppliermonitoring_resource_availability_calculator($values->nid);
  }

}
