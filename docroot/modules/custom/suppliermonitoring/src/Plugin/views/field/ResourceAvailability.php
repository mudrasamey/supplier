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
   * @{inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * @{inheritdoc}
   */
  public function render(ResultRow $values) {
    $allocation = suppliermonitoring_resource_availability_calculator($values->nid) . '%';
    return $this->t($allocation);
  }
  
}
