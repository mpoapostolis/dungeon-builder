import { Node, useStore } from '@/store'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { Gltf } from '../gltf'
import { MeshGeometry } from '../meshGeometry'

export function GameNode(props: Partial<Node>) {
  const store = useStore()
  const ref = useRef<Mesh>(null)

  const v3 = ref?.current?.position

  const targetPosition = new Vector3(props.goTo?.x, ref?.current?.position.y, props?.goTo?.z)
  useFrame(() => {
    if (props.velocity === 0 || !ref.current || !props.uuid || !props.goTo) return
    const currentPosition = ref.current.position.clone()
    const distance = currentPosition.distanceTo(targetPosition)
    if (distance > 2) {
      ref.current.lookAt(targetPosition)
      const velocity = targetPosition
        .clone()
        .sub(currentPosition)
        .normalize()
        .multiplyScalar(props?.velocity ?? 0)
      const newPosition = currentPosition.clone().add(velocity)
      ref.current.position.lerp(newPosition, 0.1)
    }
  })

  useEffect(() => {
    if (!props.uuid) return
    console.log('props.uuid', props.actionToAnimation)
  }, [props.actionToAnimation, props.uuid])

  return (
    <mesh
      ref={ref}
      type={props.gameType}
      position={props.position ?? [0, 0, 0]}
      rotation={props.rotation}
      scale={props.scale ?? [0, 0, 0]}
      castShadow
      receiveShadow
    >
      {props.url && props.uuid && props.type === 'GLTF' && (
        <Gltf animation={props.animation} uuid={props.uuid} url={props.url} />
      )}
      {props.type && props.type !== 'GLTF' && <MeshGeometry type={props.type} />}
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}
