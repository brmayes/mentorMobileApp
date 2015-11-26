# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
        # {
        #   title: "Getting Started"
        #   id: "getting-started"
        #   location: "example#getting-started"
        # }
    {
      title: "Profile"
      id: "profile"
      location: "example#profile"
    }
    {
      title: "Home"
      id: "home"
      location: "example#home" # Supersonic module#view type navigation
    }

    {
      title: "Calendar"
      id: "calendar"
      location: "example#settings"
    }
    {
      title: "Resources"
      id: "resources"
      location: "http://google.com" # URLs are supported!
    }
    {
      title: "Chat"
      id: "chat"
      location: "http://gmail.com" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
    {
      id: "register"
      location: "example#register"
    }
    {
      id: "login"
      location: "example#login"
    }
    {
      id: "getting-started"
      location: "example#getting-started"
    }
    {
      id: "edit-profile"
      location: "example#edit-profile"
    }
    {
      id: "temp-profile-display"
      location: "example#temp-profile-display"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
