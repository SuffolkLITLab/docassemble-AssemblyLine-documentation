# Browse Interviews

This interview allows you to list all YAML files on the system, which may reveal
a new attack surface if you do not properly secure sensitive interviews.

By default it can be accessed by developers or admins on production servers,
and by any logged in user on a development server (with debug: True in global config).

If you would like to limit access without turning off "debug" mode, modify the global
configuration as follows:

```yaml
assembly line:
  require login to browse interviews on development servers: True
```


See it [in action](https://apps-dev.suffolklitlab.org//start/ALDashboard/browse_interviews).