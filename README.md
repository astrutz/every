[![Deployment Status](https://api.netlify.com/api/v1/badges/3eaba9d6-c656-4963-a370-04b01e27b741/deploy-status)](https://app.netlify.com/sites/lovely-test/deploys)

# Every

This repository containing various Angular webapps that power my portfolio website at
https://alexstrutz.dev. 

## Requirements

```
node v18.14.2
npm v9.5.0
```

## Installation

To get started with this repository, follow the steps below:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory.
3. Run the following command to install the necessary dependencies:

```shell
npm install
husky install
```

## Development server

Run `ng start` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

This command will launch the local development server and make the apps accessible through the specified URLs.

## Commit Conventions

In order to standardize commits (and pull request titles) and make the effects of code changes more visible, parts of
the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) combined with
the [Devmoji notation](https://github.com/folke/devmoji) is used.

In general, a commit is structured as follows:

    <type>[optional scope][optional!]: [optional 💥]<emoji> [optional issue number:] <description>

    [optional] Additional information

    [optional, if breaking change] BREAKING CHANGES: Reason why the change is declared as such

Type and emoji must be equivalent to each other, for example, ✨ can only be used with `feat`. Breaking changes are
marked with a `!` and should include the corresponding emoji 💥, for example: `bug!: 💥🐛 ...

> ⚠ Thanks to a corresponding Git hook, the `devmoji` package takes care of 'emojifying' the commits. You do _not_ need
> to manually insert emojis into your commit messages. See: [Linting](#linting)

> 💡 Optionally, but recommended, you can run `git config commit.template .\.gitmessage` to use the project's commit
> template.

> 💡 For compatibility, only Uniblock emojis from the
>
> ranges [U+2600 to U+26FF](https://de.wikipedia.org/wiki/Unicodeblock_Verschiedene_Symbole), [U+2700 to U+27BF](https://de.wikipedia.org/wiki/Unicodeblock_Dingbats), [U+1F300 to U+1F5FF](https://de.wikipedia.org/wiki/Unicodeblock_Verschiedene_piktografische_Symbole),
> and [U+1F680 to U+1F6FF](https://de.wikipedia.org/wiki/Unicodeblock_Verkehrs-_und_Kartensymbole) may be used.

### Example Commits

```
docs: 📚 Add codegen to readme
fix: 🐛 #34: Removed unsightly missing-image icon
add: ➕ #45: Add pageFooter fragment
feat(eloglicko): ✨ #65: Additional markup and styling changes
test(eloglicko): 🔥 #64: Remove an additional test
style: 🎨 #24: Reformatted footer component spacing
config(eloglicko)!: 💥⚙️ #53: Adjust publication URL for new API endpoint
```

### Available Types and Emojis

#### Adopted from [Devmoji](https://github.com/folke/devmoji#default-devmoji-reference):

| Name     | Emoji | Description                                                                                             |
| -------- | ----- | ------------------------------------------------------------------------------------------------------- |
| feat     | ✨    | A new feature.                                                                                          |
| fix      | 🐛    | A bug fix.                                                                                              |
| docs     | 📚    | Documentation only changes.                                                                             |
| style    | 🎨    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). |
| refactor | ♻️    | A code change that neither fixes a bug nor adds a feature.                                              |
| perf     | ⚡    | A code change that improves performance.                                                                |
| test     | 🚨    | Adding missing or correcting existing tests.                                                            |
| chore    | 🔧    | Changes to auxiliary tools and libraries such as documentation generation.                              |
| deps     | 🔗    | Add or delete dependencies.                                                                             |
| build    | 📦    | Changes related to build processes.                                                                     |
| ci       | 👷    | Updates to the continuous integration system.                                                           |
| security | 🔒    | Fixing security issues.                                                                                 |
| breaking | 💥    | Introducing breaking changes.                                                                           |
| config   | ⚙️    | Changing configuration files.                                                                           |

#### Custom Devmojis

| Name   | Emoji | Description                           |
| ------ | ----- | ------------------------------------- |
| add    | ➕    | Changes with a focus on code addition |
| remove | 🔥    | Changes with a focus on code removal  |

#### Available Scopes

The scopes are mostly based on the applications and libraries in the project.

| Name      | Changes related to    |
| --------- | --------------------- |
| eloglicko | Eloglicko application |

### Linting

The `commit-msg` hook performs commit linting according to the rules mentioned above. If the linter runs successfully,
the commit message is automatically annotated with the corresponding emojis using `devmoji`. For the linting itself, we
use `commitlint` with a corresponding config (`.commitlintrc.js`). An example commit message is also provided
in `.gitmessage` and can be adjusted as needed.

## License

This repository is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, please reach out to us or open an issue in the GitHub repository.
