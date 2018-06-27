import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        "id": "a9b794e0-7952-11e8-8433-317a693cba8a",
        "title": "My First Post",
        "content": "Some post content goes here.",
        "attachment": null,
        "key": "joshua.waite",
        "created_at": "2018-06-26T15:07:37.000Z",
        "updated_at": "2018-06-26T15:07:37.000Z",
        "deleted_at": null
      },
      {
        "id": "a9b794e0-7952-11e8-8433-317a693cba8b",
        "title": "My Second Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "attachment": null,
        "key": "joshua.waite",
        "created_at": "2018-06-26T15:07:37.000Z",
        "updated_at": "2018-06-26T15:07:37.000Z",
        "deleted_at": null
      }
    ];
  }
});
