#!/bin/bash

set -euo pipefail

VERSION=
function get_latest_version() {
    VERSION=$(curl -I https://github.com/vmware-tanzu/antrea/releases/latest | \
        grep -i "^location" | \
        grep -Eo "[0-9]+\.[0-9]+\.[0-9]+")
}

function add_as_latest() {
    sed -i "/cron-antrea-update/a\      \"${VERSION}\"\," ../../../web/src/installers/versions.js
}

function generate() {
    local dir="../${VERSION}"
    if [ -d "$dir" ]; then
        echo "Antrea ${VERSION} add-on already exists"
    fi
    mkdir -p "$dir"

    cp -r base/* "$dir/"
    sed -i "s/__ANTREA_VERSION__/$VERSION/g" "../$VERSION/Manifest"

    curl -L --fail https://github.com/vmware-tanzu/antrea/releases/download/v${VERSION}/antrea.yml > "$dir/plaintext.yaml"
    curl -L --fail https://github.com/vmware-tanzu/antrea/releases/download/v${VERSION}/antrea-ipsec.yml > "$dir/ipsec.yaml"
}

function main() {
    get_latest_version

    if [ -d "../$VERSION" ]; then
        echo "Antrea ${VERSION} add-on already exists"
        exit 0
    fi

    generate

    add_as_latest

    echo "::set-output name=antrea::$VERSION"
}

main "$@"
