# Jetbrains Space Text Message Action

This is a github action to post a message to a channel in Jetbrains Space.

**Note**: This action comes with no assurances, it will either work - or it won't.
Please fork it if you wish to add new features if you can't wait for us to add them.

## Inputs
| Name | Description |
| ---- | ----------- |
| space_url | The URL for your Space (e.g: workspace.jetbrains.space) |
| access_token | The personal token for your space account [instructions](https://www.jetbrains.com/help/space/personal-tokens.html) |
| channel_id | The Channel ID you wish to send the message to |
| message | The text message to send |

## Outputs

Currently this action returns the full JSON response from the Space API.

## Example Usage
```
uses: bosslabs/jetbrains.space-text-message@v1
with:
  space_url: 'example.jetbrains.space'
  access_token: '1jidfk2kn23jkdfkefk3rjkefk3rkrkm'
  channel_id: '3WS132DDDDSS'
  message: 'This is a test message'
```