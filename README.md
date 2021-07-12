# ApprovePay-React Native-Mobile App
## ApprovePay-React Native-Mobile App 

To run locally:

`npm install`
`react-native run-android` | `react-native run-ios`

How to download apk file:
------- -------- ---------

1.Download and install Azure CLI from the below url:
https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

2.Log into the Azure CLI with the following command:
az login

3.Run the below command to download a Universal Package by providing the name and version. For example:

az artifacts universal download
    --organization https://dev.azure.com/Technology-Internal/
    --feed MobileApp
    --name my-first-package
    --version 0.0.1
    --path .

 