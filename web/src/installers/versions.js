
// first version of each is "latest"
module.exports.InstallerVersions = {
  kubernetes: [
    // cron-kubernetes-update-119
    "1.19.10",
    "1.19.9",
    "1.19.7",
    "1.19.3",
    "1.19.2",
    // cron-kubernetes-update-118
    "1.18.18",
    "1.18.17",
    "1.18.10",
    "1.18.9",
    "1.18.4",
    "1.17.13",
    "1.17.7",
    "1.17.3",
    "1.16.4",
    "1.21.0", "1.20.6", "1.20.5", "1.20.4", "1.20.2", "1.20.1", "1.20.0", // cron-kubernetes-update-120
  ],
  rke2: [
    "v1.19.7+rke2r1",
    "v1.18.13+rke2r1",
  ],
  k3s: [
    "v1.19.7+k3s1",
  ],
  docker: [
    "20.10.5",
    "19.03.10",
    "19.03.4",
    "18.09.8",
  ],
  containerd: ["1.4.4", "1.4.3", "1.3.9", "1.3.7", "1.2.13"], // cron-containerd-update
  weave: [
    "2.6.5",
    "2.6.4",
    "2.5.2",
    // cron-weave-update
    "2.8.1",
    "2.7.0",
  ],
  antrea: [
    // cron-antrea-update
      "1.0.0",
    "0.13.1",
  ],
  rook: [
    "1.0.4",
    // cron-rook-update
    "1.5.10",
    "1.5.9",
    "1.4.9",
    "1.4.3",
  ],
  contour: ["1.14.1", "1.14.0", "1.13.1", "1.13.0", "1.12.0", "1.11.0", "1.10.1", "1.7.0", "1.0.1", "0.14.0"], // cron-contour-update
  registry: [
    "2.7.1",
  ],
  prometheus: [
    // cron-prometheus-update
    "0.47.0-15.3.1",
    "0.47.0-15.2.1",
    "0.47.0-15.2.0",
    "0.46.0-14.9.0",
    "0.46.0",
    "0.44.1",
    "0.33.0",
  ],
  fluentd: [
    "1.7.4",
  ],
  kotsadm: [
    "1.41.0",
    "1.40.0",
    "1.39.1",
    "1.39.0",
    "1.38.1",
    "1.38.0",
    "1.37.0",
    "1.36.1",
    "1.36.0",
    "1.35.0",
    "1.34.0",
    "1.33.2",
    "1.33.1",
    "1.33.0",
    "1.32.0",
    "1.31.1",
    "1.31.0",
    "1.30.0",
    "1.29.3",
    "1.29.2",
    "1.29.1",
    "1.29.0",
    "1.28.0",
    "1.27.1",
    "1.27.0",
    "1.26.0",
    "1.25.2",
    "1.25.1",
    "1.25.0",
    "1.24.2",
    "1.24.1",
    "1.24.0",
    "1.23.1",
    "1.23.0",
    "1.22.4",
    "1.22.3",
    "1.22.2",
    "1.22.1",
    "1.22.0",
    "1.21.3",
    "1.21.2",
    "1.21.1",
    "1.21.0",
    "1.20.3",
    "1.20.2",
    "1.20.1",
    "1.20.0",
    "1.19.6",
    "1.19.5",
    "1.19.4",
    "1.19.3",
    "1.19.2",
    "1.19.1",
    "1.19.0",
    "1.18.1",
    "1.18.0",
    "1.17.2",
    "1.17.1",
    "1.17.0",
    "1.16.2",
    "1.16.1",
    "1.16.0",
    "1.15.5",
    "1.15.4",
    "1.15.3",
    "1.15.2",
    "1.15.1",
    "1.15.0",
    "1.14.2",
    "1.14.1",
    "1.14.0",
    "1.13.9",
    "1.13.8",
    "1.13.6",
    "1.13.5",
    "1.13.4",
    "1.13.3",
    "1.13.2",
    "1.13.1",
    "1.13.0",
    "1.12.2",
    "1.12.1",
    "1.12.0",
    "1.11.4",
    "1.11.3",
    "1.11.2",
    "1.11.1",
    "1.10.3",
    "1.10.2",
    "1.10.1",
    "1.10.0",
    "1.9.1",
    "1.9.0",
    "1.8.0",
    "1.7.0",
    "1.6.0",
    "1.5.0",
    "1.4.1",
    "1.4.0",
    "1.3.0",
    "1.2.0",
    "1.1.0",
    "1.0.1",
    "1.0.0",
    "0.9.15",
    "0.9.14",
    "0.9.13",
    "0.9.12",
    "0.9.11",
    "0.9.10",
    "0.9.9",
    "alpha",
  ],
  velero: [
    // cron-velero-update
    "1.6.0",
    "1.5.4",
    "1.5.3",
    "1.5.1",
    "1.2.0",
  ],
  openebs: [
    "1.12.0",
    "1.6.0",
    "2.6.0",
  ],
  minio: [
    "2020-01-25T02-50-51Z",
  ],
  collectd: [
    "v5",
    "0.0.1",
  ],
  ekco: [
    "0.10.1",
    "0.10.0",
    "0.9.0",
    "0.8.0",
    "0.7.0",
    "0.6.0",
    "0.5.0",
    "0.4.2",
    "0.4.1",
    "0.4.0",
    "0.3.0",
    "0.2.4",
    "0.2.3",
    "0.2.1",
    "0.2.0",
    "0.1.0",
  ],
  certManager: [
    "1.0.3",
  ],
  metricsServer: [
    "0.3.7",
    "0.4.1",
  ],
  longhorn: [
    // cron-longhorn-update
    "1.1.1",
    "1.1.0",
  ],
  sonobuoy: [
    // cron-sonobuoy-update
    "0.50.0",
  ],
};
