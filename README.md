# Static Node Server

## Kubernetes Deployment

From project's root directory run following commands:

- setup kube-lego for auto HTTPs cert (recommended)

``` bash
kubectl apply -f scripts/lego/00-namespace.yaml
kubectl apply -f scripts/lego/configmap.yaml
kubectl apply -f scripts/lego/deployment.yaml
```

- deploy

``` bash
kubectl apply -f scripts/server/00-namespace.yaml
kubectl apply -f scripts/server/service.yaml
kubectl apply -f scripts/server/deployment.yaml
kubectl apply -f scripts/server/ingress.yaml
```
