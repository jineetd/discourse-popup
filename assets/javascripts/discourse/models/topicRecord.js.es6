import RestModel from 'discourse/models/rest';

/**
 * Has to be implemented for `../controllers/topicRecord.js.es6` in order to use
 * Discourse’s store properly.
 */

export default RestModel.extend({
	/**
   * Required when sending PUT requests via Discourse’s store
   */
  updateProperties() {
  	return this.getProperties('selected_topics');
  }
});