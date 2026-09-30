# Vision & Intelligence Lab — Content Editable v3

This version is designed so that **`assets/js/content.js` is the main editing file**.

## What you can change in `content.js`

- `LAB.name` — lab name everywhere
- `LAB.tagline` — tagline/footer text
- `LAB.email` / `LAB.location`
- `LAB.sections` — turn Research / People / Publications / News / Join Us on or off
- `LAB.hero` — homepage hero text
- `LAB.research` — research cards and detail pages
- `LAB.people` — People page and homepage people section
- `LAB.publications` — Publications page and homepage publication section
- `LAB.news` — News page
- `LAB.join` — Join Us page and homepage Join section

## Hide a whole section

```js
sections: {
  research: true,
  people: true,
  publications: false,
  news: false,
  join: true
}
```

The corresponding navigation link and homepage section disappear automatically.

## Change the lab name

Change only:

```js
name: "My New Lab"
```

It is used by the navigation, footer, People, Publications, News, Join Us, and Research pages.

No Ruby, Jekyll, or build step is required. Open `index.html` directly in a browser for a local preview.

## Individual researcher pages

Edit only `assets/js/content.js` to manage researcher profiles. Each person can have:
- `slug`: URL filename, e.g. `j-lee` -> `people/j-lee.html`
- `name`, `role`, `photo`, `bio`
- `interests`, `education`, `publications`
- `email`, `scholar`

Clicking a researcher on the Home or People page opens their profile page. Replace the sample SVGs in `assets/images/people/` with real photos using the same filenames, or change the `photo` path in `content.js`.


## Adding / editing people

You only need to edit `assets/js/content.js`.

Add a new object inside `LAB.people`:

```js
{
  slug: "kim-minsu",
  name: "Minsu Kim",
  role: "Ph.D. Researcher",
  photo: "assets/images/people/kim-minsu.jpg",
  bio: "Researcher bio.",
  interests: ["Computer Vision", "Robotics"],
  education: ["Ph.D. in Computer Science, ABC University"],
  email: "minsu@example.edu",
  scholar: "https://scholar.google.com/",
  publications: ["Paper title"]
}
```

The People page will automatically link to:

`people/profile.html?person=kim-minsu`

No `people/kim-minsu.html` file is required.

If you want to remove a person, remove that object from `LAB.people`.
\n\n## Optional people profile fields\n\nEdit `assets/js/content.js`. A person's profile can include `experience`, `awards`, `projects`, `website`, `github`, and `cv`. These fields are optional. If an array is omitted or empty (`[]`), its section is automatically hidden. Optional links are also hidden when not provided.\n

### Hero image
Edit `LAB.hero.image` in `assets/js/content.js`. The current default is `assets/images/kapex.png`.


## Research editing
Add or edit research only in `assets/js/content.js` under `LAB.research`.
Each research item needs a unique `slug`. You do not need to create a new HTML file.
Research cards automatically link to `research/profile.html?research=<slug>`.


## Research topics and projects with images/descriptions

`LAB.research` supports both the original simple string format and a richer object format. You can mix them.

Simple:
```js
topics: ["SLAM", "Sensor Fusion"],
projects: ["Project A", "Project B"]
```

Rich:
```js
topics: [
  {
    title: "LiDAR-Inertial Odometry",
    description: "Fusing LiDAR and IMU measurements for robust motion estimation.",
    image: "assets/images/research/lio.jpg"
  },
  {
    title: "Semantic Mapping",
    description: "Building maps that contain object-level semantic information.",
    image: "assets/images/research/semantic-map.jpg",
    link: "https://example.com"
  }
],
projects: [
  {
    title: "KAPEX Mapping",
    description: "Long-term mapping and localization in indoor environments.",
    image: "assets/images/research/kapex-mapping.jpg"
  }
]
```

For rich items, `description`, `image`, and `link` are optional. If omitted, they are not displayed.

### Research images
For images inside Research Topics/Projects, use paths from the site root such as `assets/images/research/my-image.jpg`. The profile page automatically adds `../`, so these images work from `research/profile.html` too.
