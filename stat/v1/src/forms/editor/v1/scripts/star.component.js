/**
    * Get the base component class by referencing Formio.Components.components map.
    */
var BaseComponent = Formio.Components.components.base;

/**
 * Create a new StarRatingComponent "class" using ES5 class inheritance notation. 
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 * 
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
function StarRatingComponent(component, options, data) {
  BaseComponent.prototype.constructor.call(this, component, options, data);
}

// Perform typical ES5 inheritance
StarRatingComponent.prototype = Object.create(BaseComponent.prototype);
StarRatingComponent.prototype.constructor = StarRatingComponent;


StarRatingComponent.getAllStars = function (component) {
  var numStarValue;
  _.each(component.attrs, (attr) => {
    if (attr.attr == 'stars') {
      numStarValue = attr.value;
    }
  });
  return numStarValue;

};


StarRatingComponent.schema = function () {
  return BaseComponent.schema({
    type: 'rating',
    label: "Rating",
    hideLabel: true,
    attrs: [{
      attr: "stars",
      value: 5
    }]
    // content: ''//StarRatingComponent.inputStars(5)
  });
};

/**
 * Register this component to the Form Builder by providing the "builderInfo" object.
 * 
 * @type {{title: string, group: string, icon: string, weight: number, documentation: string, schema: *}}
 */
StarRatingComponent.builderInfo = {
  title: 'Rating',
  /* group: 'basic',*/
  icon: 'fa fa-star',
  weight: 70,
  documentation: 'http://help.form.io/userguide/#table',
  schema: StarRatingComponent.schema()
};

/**
 *  Tell the renderer how to build this component using DOM manipulation. 
 */
StarRatingComponent.prototype.build = function () {
  var numStarValue;
  this.element = this.ce('div', {
    class: 'table-responsive'
  });
  this.createLabel(this.element);

  this.htmlElement = this.ce('div', {
    id: this.id,
    class: 'rating-stars'
  })



  this.numStars = StarRatingComponent.getAllStars(this.component);
  var ulTag = this.ce('ul', {
    class: 'stars'
  })

  for (let j = 0; j < this.numStars; j++) {
    var li = this.ce('li', {
      class: 'star',

    });

    var i = this.ce('i', {
      class: 'glyphicon glyphicon-star'
    });
    li.appendChild(i);
    li.setAttribute('data-value', j + 1);

    ulTag.appendChild(li);
  }


  this.component.content = ulTag.outerHTML;

  if (this.component.content) {
    this.htmlElement.innerHTML = this.interpolate(this.component.content);
  }
  if (this.component.refreshOnChange) {
    this.on('change', () => this.htmlElement.innerHTML = this.interpolate(this.component.content), true);
  }


  this.addInput(this.htmlElement);
  this.element.appendChild(this.htmlElement);



};


/**
 * Provide the input element information. Because we are using checkboxes, the change event needs to be 
 * 'click' instead of the default 'change' from the BaseComponent.
 * 
 * @return {{type, component, changeEvent, attr}}
 */
StarRatingComponent.prototype.elementInfo = function () {
  const info = BaseComponent.prototype.elementInfo.call(this);
  info.changeEvent = 'click';
  return info;
};

/**
 * Tell the renderer how to "get" a value from this component.
 * 
 * @return {Array}
 */
StarRatingComponent.prototype.getValue = function () {
  var value = [];
  value = $(this.element).find('[data-rating]').attr("data-rating");
  if (value == undefined) {
    value = 0;
  }
  return value;
};

/**
 * Tell the renderer how to "set" the value of this component.
 * 
 * @param value
 * @return {boolean}
 */
StarRatingComponent.prototype.setValue = function (value) {


  if (!value) {
    return;
  }

  ulStars = $(this.element).find('.stars');

  $(ulStars).find('li').each(function (i) {
    $(this).removeClass('selected');
    //  iterate each child element
  });

  $(ulStars).find('li').each(function (i) {
    if (i < value) {
      $(this).addClass('selected');
    }
  });

  $(ulStars).attr('data-rating', value);

};


//alert(Formio.Components.components.table.editForm)

// Use the html component edit form.
StarRatingComponent.editForm = Formio.Components.components.htmlelement.editForm;

// Register the component to the Formio.Components registry.
Formio.Components.addComponent('rating', StarRatingComponent);

