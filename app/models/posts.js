import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    key: DS.attr('string'),
    created_at: DS.attr('string')
    // {
        //     "id": "a9b794e0-7952-11e8-8433-317a693cba8a",
        //     "title": "My First Post",
        //     "content": "Some post content goes here.",
        //     "attachment": null,
        //     "key": "joshua.waite",
        //     "created_at": "2018-06-26T15:07:37.000Z",
        //     "updated_at": "2018-06-26T15:07:37.000Z",
        //     "deleted_at": null
        //   },
});
