import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

// ─── Logo dimensions ──────────────────────────────────────────────────────────
const FW   = 1.52
const BT   = 0.30
const BD   = 0.34
const AH   = 0.76 - BT
const TB   = 0.20
const VGAP = 0.10

// ─── Scene layout ─────────────────────────────────────────────────────────────
const LOGO_BOTTOM = -(VGAP / 2 + AH + BT)   // ≈ -0.81  (bottom edge of logo frame)
const BASE_Y      = LOGO_BOTTOM - 0.55        // base centre, ~0.55 below logo
// ─── Material presets ─────────────────────────────────────────────────────────
const GOLD = { color: '#c8922a', metalness: 0.94, roughness: 0.12, envMapIntensity: 2.2 }
const SILV = { color: '#828b97', metalness: 0.97, roughness: 0.05, envMapIntensity: 2.2 }

// ─── Logo frames ─────────────────────────────────────────────────────────────
function TopFrame() {
  const hw = FW / 2
  return (
    <group>
      <mesh position={[0, VGAP / 2 + AH + BT / 2, 0]}>
        <boxGeometry args={[FW, BT, BD]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
      <mesh position={[-hw + BT / 2, VGAP / 2 + AH / 2, 0]}>
        <boxGeometry args={[BT, AH, BD]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
      <mesh position={[hw - BT / 2, VGAP / 2 + AH / 2, 0]}>
        <boxGeometry args={[BT, AH, BD]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
      <mesh position={[-hw + BT / 2, VGAP / 2 - TB / 2, 0]}>
        <boxGeometry args={[BT, TB, BD + 0.10]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
      <mesh position={[hw - BT / 2, VGAP / 2 - TB / 2, 0]}>
        <boxGeometry args={[BT, TB, BD + 0.10]} />
        <meshStandardMaterial {...GOLD} />
      </mesh>
    </group>
  )
}

function BottomFrame() {
  const hw = FW / 2
  return (
    <group>
      <mesh position={[0, -(VGAP / 2 + AH + BT / 2), 0]}>
        <boxGeometry args={[FW, BT, BD]} />
        <meshStandardMaterial {...SILV} />
      </mesh>
      <mesh position={[-hw + BT / 2, -(VGAP / 2 + AH / 2), 0]}>
        <boxGeometry args={[BT, AH, BD]} />
        <meshStandardMaterial {...SILV} />
      </mesh>
      <mesh position={[hw - BT / 2, -(VGAP / 2 + AH / 2), 0]}>
        <boxGeometry args={[BT, AH, BD]} />
        <meshStandardMaterial {...SILV} />
      </mesh>
      <mesh position={[-hw + BT / 2, -(VGAP / 2 - TB / 2), 0]}>
        <boxGeometry args={[BT, TB, BD + 0.10]} />
        <meshStandardMaterial {...SILV} />
      </mesh>
      <mesh position={[hw - BT / 2, -(VGAP / 2 - TB / 2), 0]}>
        <boxGeometry args={[BT, TB, BD + 0.10]} />
        <meshStandardMaterial {...SILV} />
      </mesh>
    </group>
  )
}

function PCDText() {
  return (
    <Suspense fallback={null}>
      <Center position={[0, 0, 0.06]}>
        <Text3D
          font="/helvetiker_bold.typeface.json"
          size={0.36}
          height={0.09}
          curveSegments={10}
          bevelEnabled
          bevelThickness={0.012}
          bevelSize={0.008}
          bevelSegments={4}
        >
          PCD
          <meshStandardMaterial {...GOLD} roughness={0.18} envMapIntensity={1.6} />
        </Text3D>
      </Center>
    </Suspense>
  )
}

// ─── Floating logo ────────────────────────────────────────────────────────────
function LogoMesh() {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    ref.current.rotation.y = t * 0.48
    ref.current.position.y = Math.sin(t * 1.57) * 0.07   // 4 s float cycle
  })
  return (
    <group ref={ref}>
      <TopFrame />
      <BottomFrame />
      <PCDText />
    </group>
  )
}

// ─── Levitation base ──────────────────────────────────────────────────────────
function LevitationBase() {
  return (
    <group position={[0, BASE_Y, 0]}>
      {/* Dark metallic disc body */}
      <mesh>
        <cylinderGeometry args={[0.88, 0.98, 0.13, 64]} />
        <meshStandardMaterial color="#0c0c14" metalness={0.88} roughness={0.22} envMapIntensity={1.2} />
      </mesh>

      {/* Top flat face */}
      <mesh position={[0, 0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.88, 64]} />
        <meshStandardMaterial color="#13131e" metalness={0.90} roughness={0.18} envMapIntensity={1.2} />
      </mesh>

    </group>
  )
}


// ─── Full scene ───────────────────────────────────────────────────────────────
function Scene() {
  return (
    // Shift everything up so logo + base are centred in the square canvas
    <group position={[0, 0.38, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.38} />
      <directionalLight position={[4, 6, 5]}   intensity={2.2}  color="#fff7e0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.55} color="#c8d8ff" />
      <pointLight       position={[0, 0, 3.5]} intensity={1.0}  color="#dcae3b" />
      {/* Warm uplight from the base surface */}
      <pointLight position={[0, BASE_Y + 0.15, 0]} intensity={0.7} color="#dcae3b" distance={2.2} decay={2} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <LogoMesh />
        <LevitationBase />
      </Suspense>
    </group>
  )
}

// ─── Canvas export ────────────────────────────────────────────────────────────
export default function LogoCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 44 }}
      gl={{
        alpha: true,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
