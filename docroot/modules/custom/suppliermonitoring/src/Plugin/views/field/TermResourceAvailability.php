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
 * @ViewsField("term_data_resource_availability")
 */
class TermResourceAvailability extends FieldPluginBase {

  /**
   * Query for the field.
   *
   * @{inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * Render the field.
   *
   * @{inheritdoc}
   */
  public function render(ResultRow $values) {
    $tid = $values->_entity->tid->getValue()[0]['value'];
    return suppliermonitoring_term_resource_availability_calculator($tid);
  }

}
