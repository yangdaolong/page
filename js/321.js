(self.webpackChunkmp_webgl = self.webpackChunkmp_webgl || []).push([
  [321],
  {
    92011: (e, t) => {
      "use strict";
      var s = (t.uO = {});
      (s.read = function (e, t) {
        return e.readFields(
          s._readField,
          { chunk: [], quantized_chunk: [] },
          t
        );
      }),
        (s._readField = function (e, t, s) {
          1 === e
            ? t.chunk.push(o.read(s, s.readVarint() + s.pos))
            : 2 === e &&
              t.quantized_chunk.push(d.read(s, s.readVarint() + s.pos));
        }),
        (s.write = function (e, t) {
          if (e.chunk)
            for (var s = 0; s < e.chunk.length; s++)
              t.writeMessage(1, o.write, e.chunk[s]);
          if (e.quantized_chunk)
            for (s = 0; s < e.quantized_chunk.length; s++)
              t.writeMessage(2, d.write, e.quantized_chunk[s]);
        });
      var i = {};
      (i.read = function (e, t) {
        return e.readFields(i._readField, { xyz: [], uv: [] }, t);
      }),
        (i._readField = function (e, t, s) {
          1 === e
            ? s.readPackedFloat(t.xyz)
            : 2 === e && s.readPackedFloat(t.uv);
        }),
        (i.write = function (e, t) {
          e.xyz && t.writePackedFloat(1, e.xyz),
            e.uv && t.writePackedFloat(2, e.uv);
        });
      var r = {};
      (r.read = function (e, t) {
        return e.readFields(r._readField, { faces: [] }, t);
      }),
        (r._readField = function (e, t, s) {
          1 === e && s.readPackedVarint(t.faces);
        }),
        (r.write = function (e, t) {
          e.faces && t.writePackedVarint(1, e.faces);
        });
      var o = {};
      (o.read = function (e, t) {
        return e.readFields(
          o._readField,
          { vertices: null, faces: null, chunk_name: "", material_name: "" },
          t
        );
      }),
        (o._readField = function (e, t, s) {
          1 === e
            ? (t.vertices = i.read(s, s.readVarint() + s.pos))
            : 2 === e
            ? (t.faces = r.read(s, s.readVarint() + s.pos))
            : 3 === e
            ? (t.chunk_name = s.readString())
            : 4 === e && (t.material_name = s.readString());
        }),
        (o.write = function (e, t) {
          e.vertices && t.writeMessage(1, i.write, e.vertices),
            e.faces && t.writeMessage(2, r.write, e.faces),
            e.chunk_name && t.writeStringField(3, e.chunk_name),
            e.material_name && t.writeStringField(4, e.material_name);
        });
      var a = {};
      (a.read = function (e, t) {
        return e.readFields(
          a._readField,
          { quantization: 0, translation: [], x: [], y: [], z: [] },
          t
        );
      }),
        (a._readField = function (e, t, s) {
          1 === e
            ? (t.quantization = s.readFloat())
            : 2 === e
            ? s.readPackedFloat(t.translation)
            : 3 === e
            ? s.readPackedSVarint(t.x)
            : 4 === e
            ? s.readPackedSVarint(t.y)
            : 5 === e && s.readPackedSVarint(t.z);
        }),
        (a.write = function (e, t) {
          e.quantization && t.writeFloatField(1, e.quantization),
            e.translation && t.writePackedFloat(2, e.translation),
            e.x && t.writePackedSVarint(3, e.x),
            e.y && t.writePackedSVarint(4, e.y),
            e.z && t.writePackedSVarint(5, e.z);
        });
      var n = {};
      (n.read = function (e, t) {
        return e.readFields(
          n._readField,
          { name: "", quantization: 0, u: [], v: [] },
          t
        );
      }),
        (n._readField = function (e, t, s) {
          1 === e
            ? (t.name = s.readString())
            : 2 === e
            ? (t.quantization = s.readFloat())
            : 3 === e
            ? s.readPackedSVarint(t.u)
            : 4 === e && s.readPackedSVarint(t.v);
        }),
        (n.write = function (e, t) {
          e.name && t.writeStringField(1, e.name),
            e.quantization && t.writeFloatField(2, e.quantization),
            e.u && t.writePackedSVarint(3, e.u),
            e.v && t.writePackedSVarint(4, e.v);
        });
      var h = {};
      (h.read = function (e, t) {
        return e.readFields(h._readField, { faces: [] }, t);
      }),
        (h._readField = function (e, t, s) {
          1 === e && s.readPackedSVarint(t.faces);
        }),
        (h.write = function (e, t) {
          e.faces && t.writePackedSVarint(1, e.faces);
        });
      var d = {};
      (d.read = function (e, t) {
        return e.readFields(
          d._readField,
          {
            chunk_name: "",
            material_name: "",
            vertices: null,
            uvs: [],
            faces: null,
          },
          t
        );
      }),
        (d._readField = function (e, t, s) {
          1 === e
            ? (t.chunk_name = s.readString())
            : 2 === e
            ? (t.material_name = s.readString())
            : 3 === e
            ? (t.vertices = a.read(s, s.readVarint() + s.pos))
            : 4 === e
            ? t.uvs.push(n.read(s, s.readVarint() + s.pos))
            : 5 === e && (t.faces = r.read(s, s.readVarint() + s.pos));
        }),
        (d.write = function (e, t) {
          if (
            (e.chunk_name && t.writeStringField(1, e.chunk_name),
            e.material_name && t.writeStringField(2, e.material_name),
            e.vertices && t.writeMessage(3, a.write, e.vertices),
            e.uvs)
          )
            for (var s = 0; s < e.uvs.length; s++)
              t.writeMessage(4, n.write, e.uvs[s]);
          e.faces && t.writeMessage(5, r.write, e.faces);
        });
    },
    14824: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => v });
      var i = s(47724),
        r = s(96909),
        o = s(21479),
        a = s(67027),
        n = s(75892),
        h = s(35597),
        d = s(46114),
        l = s(29397),
        u = s(85895),
        c = s(51764),
        m = s(91302),
        p = s(68576),
        f = s(88814),
        g = s(79437),
        M = s(26059),
        y = s(6559),
        x = s(80301),
        T = s(45298),
        w = s(5087);
      class ModelMeshQualityModule extends i.Y {
        constructor() {
          super(...arguments),
            (this.name = "mesh-quality"),
            (this.updateMaxQuality = (() => {
              let e, t, s;
              return ({
                modeChange: i,
                criticalChange: r,
                interactionChange: o,
              }) => {
                void 0 !== r && (t = r),
                  void 0 !== i && (e = i),
                  void 0 !== o && (s = o);
                const a =
                    s === M.s.VrOrientOnly ||
                    s === M.s.VrWithController ||
                    s === M.s.VrWithTrackedController,
                  n =
                    this.modelMeshModule.stats().textureCount <=
                    this.config.textureLODThreshold
                      ? Math.max(y.S7.ULTRA, this.config.maxQuality)
                      : y.S7.MEDIUM,
                  h = Math.max(
                    n,
                    e === w.Ey.Panorama &&
                      0 === this.meshData.meshTextureOpacity.value
                      ? n
                      : this.config.maxQuality
                  );
                this.modelMeshModule.setTextureLimits(n, h);
                const d =
                    this.viewmodeData.currentMode !== w.Ey.Dollhouse &&
                    this.viewmodeData.currentMode !== w.Ey.Floorplan,
                  l =
                    this.viewmodeData.transition.active &&
                    (0, w.Bw)(this.viewmodeData.transition.to);
                a || l || (t && d)
                  ? this.modelMeshModule.setTextureStreamMode(x.l.NONE)
                  : this.modelMeshModule.setTextureStreamMode(
                      this.config.textureLOD
                    );
              };
            })());
        }
        async init(e, t) {
          (this.config = e),
            (this.engine = t),
            ([
              this.modelMeshModule,
              this.meshData,
              this.viewmodeData,
              this.sweepData,
              this.appData,
            ] = await Promise.all([
              t.getModuleBySymbol(r.y.MODEL_MESH),
              t.market.waitForData(a._),
              t.market.waitForData(h.O),
              t.market.waitForData(n.Z),
              t.market.waitForData(o.pu),
            ])),
            this.bindAppEventsToTextureQuality(),
            this.bindAppEventsToTextureVisibility(),
            this.updateMaxQuality({}),
            this.updateRenderMode();
        }
        bindAppEventsToTextureQuality() {
          let e = 0;
          this.bindings.push(
            this.meshData.onChanged((t) => {
              t.meshTextureOpacity.value !== e && this.updateMaxQuality({}),
                (e = t.meshTextureOpacity.value);
            }),
            this.appData.onPropertyChanged("phase", () => {
              this.updateMaxQuality({});
            }),
            this.engine.subscribe(p.Z, (e) => {
              this.updateMaxQuality({
                criticalChange: !0,
                modeChange: e.toMode,
              });
            }),
            this.engine.subscribe(f.Z, (e) => {
              this.updateMaxQuality({
                criticalChange: !1,
                modeChange: e.toMode,
              });
            }),
            this.engine.subscribe(m.oR, () => {
              this.updateMaxQuality({ criticalChange: !0 });
            }),
            this.engine.subscribe(m.NR, () => {
              this.updateMaxQuality({ criticalChange: !1 });
            }),
            this.engine.subscribe(l.Z, () => {
              this.updateMaxQuality({ criticalChange: !0 });
            }),
            this.engine.subscribe(u.Z, () => {
              this.updateMaxQuality({ criticalChange: !1 });
            }),
            this.engine.subscribe(d.m, (e) => {
              this.updateMaxQuality({ interactionChange: e.mode });
            })
          );
        }
        bindAppEventsToTextureVisibility() {
          this.bindings.push(
            this.engine.subscribe(p.Z, (e) => {
              this.updateRenderMode();
            }),
            this.engine.subscribe(c.Z, (e) => {
              const t = this.sweepData.isSweepUnaligned(e.toSweep);
              t !== this.sweepData.isSweepUnaligned(e.fromSweep) &&
                this.modelMeshModule.setRenderMode(
                  t ? T.k.PanoramaCube : T.k.PanoramaMesh
                );
            })
          );
        }
        updateRenderMode() {
          const e =
              this.viewmodeData.currentMode === w.Ey.Panorama ||
              this.viewmodeData.transition.to === w.Ey.Panorama,
            t = e ? T.k.PanoramaMesh : T.k.Mesh,
            s = e ? g.Q9 : g.w2;
          this.modelMeshModule.setRenderMode(t, s);
        }
      }
      const v = ModelMeshQualityModule;
    },
    57724: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => MeshApiFixupModule });
      var i = s(47724),
        r = s(96909),
        o = s(26627),
        a = s(67027),
        n = s(75892);
      class MeshApiFixupModule extends i.Y {
        constructor() {
          super(...arguments), (this.name = "mesh-api-data-fixups");
        }
        async init(e, t) {
          const { market: s } = t;
          ([this.floorData, this.sweepData, this.meshData, this.meshQuery] =
            await Promise.all([
              s.waitForData(o.i),
              s.waitForData(n.Z),
              s.waitForData(a._),
              t.getModuleBySymbol(r.y.MESH_QUERY),
              t.getModuleBySymbol(r.y.MODEL_MESH),
            ])),
            this.assignSweepToFloors(),
            this.assignBoundingBoxesToFloors(),
            this.assignMissingSweepFloors();
        }
        assignBoundingBoxesToFloors() {
          const e = [...this.meshData.meshGroups.floors];
          this.floorData.iterate((t, s) => {
            const i = e.find((e) => e.meshGroup === t.meshGroup);
            i && t.setBounds(i.boundingBox);
          }),
            this.floorData.commit();
        }
        assignMissingSweepFloors() {
          this.sweepData.getSweepList().forEach((e) => {
            var t;
            if (e.isUnplaced()) return;
            let s;
            if (null === e.floorId || !this.floorData.hasFloor(e.floorId)) {
              const i = this.meshQuery.floorIdFromObject(
                null === (t = this.meshQuery.nearestMeshInfo(e.position)) ||
                  void 0 === t
                  ? void 0
                  : t.object
              );
              i &&
                this.floorData.hasFloor(i) &&
                (s = this.floorData.getFloor(i)),
                (null == s ? void 0 : s.id) &&
                  s.id !== e.floorId &&
                  (this.log.debug(
                    `Setting ${e.alignmentType} sweep ${e.id} from floor ${e.floorId} to ${s.id}`
                  ),
                  (e.floorId = s.id),
                  e.commit());
            }
          });
        }
        assignSweepToFloors() {
          this.sweepData.getSweepList().forEach((e) => {
            if (!e.isUnplaced() && e.isAligned()) {
              let t;
              if (e.floorId && this.floorData.hasFloor(e.floorId))
                t = this.floorData.getFloor(e.floorId);
              else {
                const s = this.meshQuery.floorIdFromObject(
                  this.meshQuery.nearestMeshInfo(e.position)
                );
                s &&
                  this.floorData.hasFloor(s) &&
                  (t = this.floorData.getFloor(s));
              }
              t && t.addSweep(e);
            }
          }),
            this.floorData.commit();
        }
      }
    },
    26203: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => MeshQueryModule });
      var i = s(47724),
        r = s(96909),
        o = s(86488),
        a = s(26627);
      const n = (...e) =>
        function (t) {
          return e.every((e) => e(t));
        };
      var h = s(51245),
        d = s(2212);
      class MeshQueryModule extends i.Y {
        constructor() {
          super(...arguments), (this.name = "mesh-query");
        }
        async init(e, t) {
          const { market: s } = t;
          [this.raycaster, this.floorData, this.roomData] = await Promise.all([
            t.getModuleBySymbol(r.y.RAYCASTER),
            s.waitForData(a.i),
            s.waitForData(o.Z),
          ]);
        }
        nearestMeshInfoOnFloor(e, t) {
          const s = n(h.$4.isRoomMesh, this.matchesFloorId(t));
          return this.raycaster.picking.nearest(
            new d.Vector3().set(e.x, e.y, e.z),
            s
          );
        }
        nearestMeshInfo(e) {
          return this.raycaster.picking.nearest(
            new d.Vector3().set(e.x, e.y, e.z),
            h.$4.isRoomMesh
          );
        }
        inferMeshIdsFromPoint(e, t) {
          const s = !e.roomId || !this.roomData.get(e.roomId),
            i = !e.floorId || !this.floorData.hasFloor(e.floorId);
          if (s || i) {
            const r = i
                ? h.$4.isRoomMesh
                : n(h.$4.isRoomMesh, this.matchesFloorId(e.floorId)),
              o = this.raycaster.picking.nearest(
                new d.Vector3().set(t.x, t.y, t.z),
                r
              ),
              a = o && this.roomIdFloorIdFromObject(o.object);
            if (a) {
              const { roomId: t, floorId: r } = a;
              this.log.debug(
                "data-fixup:",
                s ? { roomId: t, prev: e.roomId } : "",
                i ? { floorId: r, prev: e.floorId } : "",
                { data: e }
              ),
                s && (e.roomId = t),
                i && (e.floorId = r);
            } else
              this.log.warn("Nearest Room/Floor not found for:", {
                point: t,
                data: e,
                invalidRoomId: s,
                invalidFloorId: i,
              });
          }
          return e;
        }
        roomIdFloorIdFromObject(e) {
          if (!h.$4.hasMeshGroup(e)) return;
          const t = this.floorData.getFloorByMeshGroup(e.meshGroup);
          if (void 0 === t) return;
          const s = h.$4.hasMeshSubgroup(e)
            ? this.roomData.getByMeshSubgroup(e.meshSubgroup)
            : void 0;
          return { floorId: t.id, roomId: null == s ? void 0 : s.id };
        }
        floorIdFromObject(e) {
          if (h.$4.hasMeshGroup(e)) {
            const t = this.floorData.getFloorByMeshGroup(e.meshGroup);
            return null == t ? void 0 : t.id;
          }
        }
        mdsRoomIdFromObject(e) {
          if (!h.$4.hasMeshSubgroup(e) || !h.$4.hasMeshGroup(e)) return;
          const t = this.roomData.getByMeshSubgroup(e.meshSubgroup);
          if (!t) return;
          const s = this.floorData.getFloorByMeshGroup(e.meshGroup);
          return t.floorId === (null == s ? void 0 : s.id) ? t.id : void 0;
        }
        mdsFloorIdFromObject(e) {
          if (!h.$4.hasMeshGroup(e)) return;
          const t = this.floorData.getFloorByMeshGroup(e.meshGroup);
          return t ? t.id : void 0;
        }
        matchesFloorId(e) {
          return (t) => {
            const s = this.roomIdFloorIdFromObject(t);
            return (null == s ? void 0 : s.floorId) === e;
          };
        }
      }
    },
    53694: (e, t, s) => {
      "use strict";
      s.d(t, { r: () => MeshTrim });
      var i = s(23573),
        r = s(10757),
        o = s(2212);
      class MeshTrim extends i.T {
        constructor(
          e,
          t,
          s,
          i,
          a,
          n,
          h = new Date(),
          d = new Date(),
          l,
          u,
          c,
          m
        ) {
          super(),
            (this.position = e),
            (this.scale = t),
            (this.rotation = s),
            (this.enabled = a),
            (this.meshGroup = n),
            (this.created = h),
            (this.modified = d),
            (this.discardContents = !0),
            (this.activeInPanoMode = !0),
            (this._rotationMatrix = new o.Matrix4()),
            (this.id = l || `${this.meshGroup}` + (0, r.O1)(11)),
            (this.index = i),
            (this.name = u),
            (this.discardContents = void 0 === c || c),
            (this.activeInPanoMode = void 0 === m || m);
        }
        get sid() {
          return this.id;
        }
        updateRotationMatrix() {
          const e = this.rotation,
            t = this.rotation.clone().set(e.x, e.y, e.z, -e.w);
          this._rotationMatrix.makeRotationFromQuaternion(t.normalize());
        }
        get rotationMatrix() {
          return this.updateRotationMatrix(), this._rotationMatrix;
        }
      }
    },
    65989: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => CreateMeshTrimCommand,
        yg: () => DeleteMeshTrimCommand,
        dg: () => MoveMeshTrimToAllFloorsCommand,
      });
      var i = s(17386);
      class CreateMeshTrimCommand extends i.m {
        constructor(e) {
          super(), (this.payload = e), (this.id = "CREATE_MESH_TRIM");
        }
      }
      class DeleteMeshTrimCommand extends i.m {
        constructor(e) {
          super(), (this.payload = e), (this.id = "DELETE_MESH_TRIM");
        }
      }
      class MoveMeshTrimToAllFloorsCommand extends i.m {
        constructor(e) {
          super(), (this.payload = e), (this.id = "MOVE_MESH_TRIM_ALL_FLOORS");
        }
      }
    },
    33512: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => MeshTrimData });
      var i = s(32770),
        r = s(75256),
        o = s(64781),
        a = s(60697),
        n = s(56247),
        h = s(88512),
        d = s(28719),
        l = s(44283);
      const u = new h.Z("MeshTrimData");
      class MeshTrimData extends i.V {
        constructor(e, t) {
          super(),
            (this.maxTrimsPerFloor = n.t),
            (this.maxAllFloorsTrims = n.t),
            (this.numberOfTrims = 0),
            (this.meshTrimsByMeshGroup = new o.v()),
            (this.meshTrimsById = new o.v()),
            (this.onMeshGroupChangedCallbacks = new Set()),
            (this.onMeshTrimChangedCallbacks = new Set()),
            (this.updateMeshTrim = (e) => {
              for (const t of this.onMeshTrimChangedCallbacks) t(e);
            }),
            (this.notifyMeshGroupChanges = (e) => {
              for (const t of this.onMeshGroupChangedCallbacks) t(e);
            });
          for (const e of t) {
            const t = new r.d();
            this.meshTrimsByMeshGroup.set(`${e}`, t);
          }
          1 === t.length && (this.singleFloorMeshGroup = t[0]),
            this.meshTrimsByMeshGroup.set(`${a.eh}`, new r.d());
          try {
            this.add(...Object.values(e));
          } catch (e) {}
        }
        add(...e) {
          const t = new Set();
          let s = !1;
          if (
            (this.meshTrimsById.atomic(() => {
              this.meshTrimsByMeshGroup.atomic(() => {
                for (const i of e) {
                  void 0 !== this.singleFloorMeshGroup &&
                    (i.meshGroup = this.singleFloorMeshGroup);
                  const e = i.meshGroup === a.eh,
                    o = `${i.meshGroup}`;
                  this.meshTrimsByMeshGroup.has(o) ||
                    this.meshTrimsByMeshGroup.set(o, new r.d());
                  const n = this.meshTrimsByMeshGroup.get(o);
                  n.length <
                  (e ? this.maxAllFloorsTrims : this.maxTrimsPerFloor)
                    ? (n.push(i),
                      this.meshTrimsById.set(i.id, i),
                      t.add(i.meshGroup),
                      i.onChanged(this.updateMeshTrim))
                    : (u.debugWarn(
                        "Trims exceed floor limit (trimId, meshGroup):",
                        i.id,
                        i.meshGroup
                      ),
                      (s = !0));
                }
              });
            }),
            t.forEach((e) => {
              const t = this.meshTrimsByMeshGroup.get(`${e}`);
              this.sortList(t),
                this.reassignIndexes(t),
                this.notifyMeshGroupChanges(e);
            }),
            this.updateDerivedProperties(),
            this.commit(),
            s)
          )
            throw new d.M("Exceeding max trims");
        }
        delete(...e) {
          const t = new Set();
          this.meshTrimsByMeshGroup.atomic(() => {
            for (const s of e) {
              const e = this.meshTrimsByMeshGroup.get(`${s.meshGroup}`),
                i = e.indexOf(s);
              if (i >= 0) {
                (e.splice(i, 1)[0].enabled = !1),
                  t.add(s.meshGroup),
                  s.removeOnChanged(this.updateMeshTrim);
              } else u.error("Could not delete mesh trim:" + s.id);
            }
          }),
            t.forEach((e) => {
              const t = this.meshTrimsByMeshGroup.get(`${e}`);
              this.reassignIndexes(t), this.notifyMeshGroupChanges(e);
            }),
            this.meshTrimsById.atomic(() => {
              e.forEach((e) => {
                this.meshTrimsById.delete(e.id);
              });
            }),
            this.updateDerivedProperties(),
            this.commit();
        }
        updateDerivedProperties() {
          (this.numberOfTrims = this.meshTrimsById.length),
            (this.maxTrimsPerFloor =
              n.t - this.meshTrimsByMeshGroup.get(`${a.eh}`).length),
            (this.maxAllFloorsTrims = n.t - this.getLongestTrimListLength());
        }
        onMeshGroupChanged(e) {
          return (0, l.k1)(
            () => this.onMeshGroupChangedCallbacks.add(e),
            () => this.onMeshGroupChangedCallbacks.delete(e)
          );
        }
        onMeshTrimChanged(e) {
          return (0, l.k1)(
            () => this.onMeshTrimChangedCallbacks.add(e),
            () => this.onMeshTrimChangedCallbacks.delete(e)
          );
        }
        getTrimById(e) {
          return this.meshTrimsById.get(e);
        }
        getTrim(e, t) {
          return this.meshTrimsByMeshGroup.has(`${e}`)
            ? this.meshTrimsByMeshGroup.get(`${e}`).get(t)
            : null;
        }
        getTrimsForMeshGroup(e) {
          return this.meshTrimsByMeshGroup.has(`${e}`)
            ? this.meshTrimsByMeshGroup.get(`${e}`).values()
            : [];
        }
        reassignIndexes(e) {
          e.forEach((e, t) => {
            e.index = t;
          });
        }
        sortList(e) {
          e.sort((e, t) => e.index - t.index);
        }
        getLongestTrimListLength() {
          let e = 0;
          return (
            this.meshTrimsByMeshGroup.keys.forEach((t) => {
              if (t === `${a.eh}`) return;
              const s = this.meshTrimsByMeshGroup.get(t);
              e = Math.max(s.length, e);
            }),
            e
          );
        }
      }
    },
    28719: (e, t, s) => {
      "use strict";
      s.d(t, { M: () => TooManyTrimsError });
      var i = s(31102);
      class TooManyTrimsError extends i.y {
        constructor(e) {
          super(e), (this.name = "TooManyTrimsError");
        }
      }
    },
    11210: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => MeshTrimDataModule });
      var i = s(47724),
        r = s(39729),
        o = s(57361),
        a = s(71194),
        n = s(12040),
        h = s(33394),
        d = s(62330),
        l = s(13789),
        u = s(33512);
      class CollectionSerializer {
        constructor(e) {
          this.config = e;
        }
        serialize(e) {
          const { serializer: t } = this.config;
          if (!e || !t) return null;
          const s = {};
          for (const i in e) {
            const r = t.serialize(e[i]);
            r && (s[i] = r);
          }
          return s;
        }
        deserialize(e) {
          const { deserializer: t } = this.config;
          if (!e || !t) return {};
          const s = {};
          for (const i in e) {
            const r = t.deserialize(e[i]);
            r && (s[i] = r);
          }
          return s;
        }
      }
      var c = s(38330),
        m = s(19674),
        p = s(31879),
        f = s(53694);
      const g = new (s(88512).Z)("JsonStoreMeshTrimDeserializer"),
        M = [
          { path: ["position", "x"], type: "number" },
          { path: ["position", "y"], type: "number" },
          { path: ["position", "z"], type: "number" },
          { path: ["scale", "x"], type: "number" },
          { path: ["scale", "y"], type: "number" },
          { path: ["scale", "z"], type: "number" },
          { path: ["rotation", "x"], type: "number" },
          { path: ["rotation", "y"], type: "number" },
          { path: ["rotation", "z"], type: "number" },
          { path: ["rotation", "w"], type: "number" },
          { path: ["index"], type: "number" },
          { path: ["enabled"], type: "boolean" },
          { path: ["meshGroup"], type: "number" },
          { path: ["id"], type: "string" },
          { path: ["created"], type: "string" },
          { path: ["modified"], type: "string" },
        ];
      class JsonStoreMeshTrimDeserializer {
        constructor() {
          this.deserialize = (e) => {
            if (!this.isValid(e))
              return (
                g.debug("Unable to deserialize invalid mesh trim data", e), null
              );
            const {
              position: t,
              scale: s,
              rotation: i,
              index: r,
              enabled: o,
              meshGroup: a,
              created: n,
              modified: h,
              id: d,
              name: l,
              discardContents: u,
              activeInPanoMode: c,
            } = e;
            return new f.r(
              m.ep.fromVisionVector(t),
              m.ep.fromVisionVector(s),
              m.ep.fromVisionQuaternion(i),
              r,
              o,
              a,
              (0, p.p)(n),
              (0, p.p)(h),
              d,
              l,
              u,
              c
            );
          };
        }
        isValid(e) {
          if (!e || "object" != typeof e) return !1;
          const t = e;
          return (
            void 0 === t.meshGroup && (t.meshGroup = t.floorIndex),
            M.every((t) => this.hasRequiredField(e, t))
          );
        }
        hasRequiredField(e, t) {
          try {
            return (
              typeof t.path.reduce((s, i) => {
                if ("object" == typeof s && null !== s) return s[i];
                throw new Error(
                  `data ${JSON.stringify(
                    e
                  )} must be addressable by ${t.path.join(
                    "."
                  )} with a value of type ${t.type}`
                );
              }, e) === t.type
            );
          } catch (e) {
            return g.debug(e), !1;
          }
        }
      }
      var y = s(87324);
      class JsonStoreMeshTrimSerializer {
        serialize(e) {
          if (!e) return null;
          const {
            position: t,
            scale: s,
            rotation: i,
            index: r,
            enabled: o,
            meshGroup: a,
            created: n,
            modified: h,
            id: d,
            name: l,
            discardContents: u,
            activeInPanoMode: c,
          } = e;
          return {
            position: (0, y.m)(m.ep.toVisionVector(t)),
            scale: (0, y.m)(m.ep.toVisionVector(s)),
            rotation: (0, y.J5)(m.ep.toVisionQuaternion(i)),
            index: r,
            enabled: o,
            meshGroup: a,
            created: (0, p.U)(n),
            modified: (0, p.U)(h),
            id: d,
            name: l,
            discardContents: u,
            activeInPanoMode: c,
          };
        }
      }
      class JsonMeshTrimStore extends c.MU {
        constructor(e, t, s) {
          const i = new JsonStoreMeshTrimDeserializer(),
            r = new JsonStoreMeshTrimSerializer(),
            o = new CollectionSerializer({ deserializer: i, serializer: r });
          super({
            queue: e,
            path: `${t}/api/v1/jsonstore/model/trims/${s}`,
            batchUpdate: !0,
            deserialize: (e) => o.deserialize(e),
            serialize: (e) => o.serialize(e),
          });
        }
      }
      var x = s(65989),
        T = s(28719),
        w = s(60697),
        v = s(67027);
      const { TRIM: b } = l.Z.WORKSHOP;
      class MeshTrimDataModule extends i.Y {
        constructor() {
          super(...arguments),
            (this.name = "trim-data"),
            (this.createMeshTrim = async (e) => {
              try {
                this.data.add(e);
              } catch (e) {
                if (e instanceof T.M) {
                  const e = b.MAX_TRIMS_ERROR_MESSAGE;
                  this.engine.commandBinder.issueCommand(
                    new h.I(e, { throttle: 0, type: n.N.ERROR })
                  );
                }
              }
            }),
            (this.deleteMeshTrim = async (e) => {
              this.data.delete(e);
            }),
            (this.save = async () => {
              const e = this.monitor.getDiffRecord();
              if ((this.monitor.clearDiffRecord(), !e.length)) return;
              const t = {};
              for (const s of e)
                switch (s.action) {
                  case a.KI.added:
                  case a.KI.updated:
                    t[s.index] = this.data.getTrimById(s.index);
                    break;
                  case a.KI.removed:
                    t[s.index] = null;
                }
              try {
                await this.store.update(t);
              } catch (e) {
                this.log.debug("error when writing to json storage"),
                  this.log.debug(e);
                const t = b.UNABLE_TO_SAVE_CHANGES_ERROR_MESSAGE;
                this.engine.commandBinder.issueCommand(
                  new h.I(t, { throttle: 30, type: n.N.ERROR })
                );
              }
            }),
            (this.moveMeshTrimToAllFloors = async (e) => {
              const t = e.enabled;
              this.deleteMeshTrim(e),
                (e.meshGroup = w.eh),
                (e.enabled = t),
                this.createMeshTrim(e);
            }),
            (this.onMeshTrimsChanged = (0, d.P)(this.save, 1e3));
        }
        async init(e, t) {
          (this.engine = t),
            (this.store = new JsonMeshTrimStore(e.queue, e.baseUrl, e.modelId));
          let s = {};
          try {
            s = (await this.store.read()) || {};
          } catch (e) {
            this.log.debug("error when reading from json storage"),
              this.log.debug(e);
          }
          const i = [...(await t.market.waitForData(v._)).meshGroups.floors]
            .map((e) => e.meshGroup)
            .sort();
          (this.data = new u.Z(s, i)),
            (this.monitor = new o.c(this.data.meshTrimsById, {
              aggregationType: r.E.Immediate,
            })),
            t.market.register(this, u.Z, this.data),
            this.bindings.push(
              t.commandBinder.addBinding(x.A, this.createMeshTrim),
              t.commandBinder.addBinding(x.yg, this.deleteMeshTrim),
              t.commandBinder.addBinding(x.dg, this.moveMeshTrimToAllFloors)
            ),
            this.monitor.onChanged(this.onMeshTrimsChanged);
        }
      }
    },
    17915: (e, t, s) => {
      "use strict";
      s.d(t, { z: () => Chunk });
      var i = s(2212),
        r = s(56247),
        o = s(67078);
      class ChunkMaterial extends o.b {
        constructor(e, t, s) {
          const i = {};
          for (const e of t) i[e] = !0;
          super({
            extensions: { derivatives: !0 },
            fragmentShader: r.Z.modelChunk.fragmentShader,
            vertexShader: r.Z.modelChunk.vertexShader,
            uniforms: s,
            name: e,
            defines: i,
          }),
            (this.capabilities = t);
        }
      }
      var a = s(22377),
        n = s(19131),
        h = s(10757),
        d = s(2388),
        l = s(44283),
        u = s(17916),
        c = s(75351);
      function m(e, t) {
        return null == t
          ? t
          : t.isVector3 ||
            t.isVector4 ||
            t.isMatrix3 ||
            t.isMatrix4 ||
            t.isColor
          ? null != e
            ? (e.copy(t), e)
            : t.clone()
          : t;
      }
      let p,
        f = 1;
      try {
        p = (0, n.k7)(0, 0);
      } catch (e) {}
      let g = 1 / 0;
      const M = 5 + r.t,
        y = [
          {
            key: a.h.PanoTextureTransition,
            enabled: function (e) {
              return (
                e.progress.value > 0 &&
                e.progress.value < 1 &&
                e.pano0Map.value !== e.pano1Map.value
              );
            },
            dependsOn: [a.h.PanoTexture],
            uniformsUsed: ["progress", "pano0Map", "pano1Map"],
          },
          {
            key: a.h.PanoTexture,
            enabled: function (e) {
              return e.panoOpacity.value > 0;
            },
            dependsOn: [],
            uniformsUsed: ["panoOpacity"],
          },
          {
            key: a.h.ColorOverlay,
            enabled: function (e) {
              return null !== e.colorOverlay.value;
            },
            dependsOn: [],
            uniformsUsed: ["colorOverlay"],
          },
          {
            key: a.h.MeshPreviewSphere,
            enabled: function (e) {
              return null !== e.meshPreviewCenter.value;
            },
            dependsOn: [a.h.MeshTexture],
            uniformsUsed: [],
          },
          {
            key: a.h.MeshTexture,
            enabled: function (e) {
              return e.meshOpacity.value > 0 && e.map.value;
            },
            dependsOn: [],
            uniformsUsed: ["meshOpacity", "map"],
          },
          {
            key: a.h.Wireframe,
            enabled: function (e) {
              return !1;
            },
            dependsOn: [],
            uniformsUsed: [],
          },
          {
            key: a.h.FlatShading,
            enabled: function (e) {
              return !1;
            },
            dependsOn: [],
            uniformsUsed: [],
          },
          {
            key: a.h.PanoOverlay,
            enabled: function (e) {
              return !!e.overlay0Map.value;
            },
            dependsOn: [a.h.PanoTexture],
            uniformsUsed: ["overlay0Map"],
          },
          {
            key: a.h.PanoOverlayTransition,
            enabled: function (e) {
              return !!(
                e.progress.value > 0 &&
                e.progress.value < 1 &&
                e.overlay0Map.value &&
                e.overlay1Map.value &&
                e.overlay0Map.value !== e.overlay1Map.value
              );
            },
            dependsOn: [
              a.h.PanoOverlay,
              a.h.PanoTexture,
              a.h.PanoTextureTransition,
            ],
            uniformsUsed: ["progress", "overlay0Map", "overlay1Map"],
          },
          {
            key: a.h.MeshTrimVertex,
            enabled: function (e) {
              return (
                g > M && e.meshTrimMatrices.value.some((e) => !!e.elements[15])
              );
            },
            dependsOn: [a.h.MeshTexture],
            uniformsUsed: ["meshTrimMatrices", "meshTrimsDiscardContents"],
          },
          {
            key: a.h.MeshTrimPixel,
            enabled: function (e) {
              return (
                g <= M && e.meshTrimMatrices.value.some((e) => !!e.elements[15])
              );
            },
            dependsOn: [a.h.MeshTexture],
            uniformsUsed: ["meshTrimMatrices", "meshTrimsDiscardContents"],
          },
        ],
        x = new Set(
          y.map((e) => e.uniformsUsed).reduce((e, t) => e.concat(t), [])
        ),
        T = new Set([
          "progress",
          "panoOpacity",
          "meshOpacity",
          "pano0Map",
          "pano0Position",
          "pano0Matrix1",
          "pano0Matrix2",
          "pano1Map",
          "pano1Position",
          "pano1Matrix1",
          "pano1Matrix2",
          "overlay0Map",
          "overlay0Matrix",
          "overlay1Map",
          "overlay1Matrix",
        ]);
      class Chunk {
        constructor(e, t, s, o = "", a = !1) {
          if (
            ((this.meshGroup = e),
            (this.meshSubgroup = t),
            (this.geometry = s),
            (this.textureName = o),
            (this.id = f++),
            (this.name = ""),
            (this.lod = u.V.Standard),
            (this.capabilityOverrides = {}),
            (this.onMaterialUpdate = new Set()),
            (this.uniformCache = Chunk.getUniformDefaults()),
            (this.opacity = 1),
            (this.temp = {
              m1: new i.Matrix4(),
              m2: new i.Matrix4(),
              quat: new i.Quaternion(),
            }),
            !Chunk.modeMaterials)
          ) {
            Chunk.modeMaterials = {};
            const e = i.UniformsUtils.clone(r.Z.depth.uniforms);
            Chunk.modeMaterials[c.S.Depth] = new i.RawShaderMaterial({
              fragmentShader: r.Z.depth.fragmentShader,
              vertexShader: r.Z.depth.vertexShader,
              uniforms: e,
              side: i.FrontSide,
              name: "materialDepth",
            });
            const t = i.UniformsUtils.clone(r.Z.modelOutside.uniforms);
            (t.opacity.value = 0.2),
              t.colorOverlay.value.set(1, 1, 1, 1),
              (Chunk.modeMaterials[c.S.Transparent] = new i.RawShaderMaterial({
                fragmentShader: r.Z.modelOutside.fragmentShader,
                vertexShader: r.Z.modelOutside.vertexShader,
                uniforms: t,
                side: i.FrontSide,
                transparent: !0,
                name: "materialTransparent",
              }));
            const s = i.UniformsUtils.clone(r.Z.modelOutside.uniforms);
            (s.opacity.value = 0.5),
              s.colorOverlay.value.set(1, 1, 1, 1),
              (Chunk.modeMaterials[c.S.Wireframe] = new i.RawShaderMaterial({
                fragmentShader: r.Z.modelOutside.fragmentShader,
                vertexShader: r.Z.modelOutside.vertexShader,
                uniforms: s,
                side: i.FrontSide,
                transparent: !0,
                wireframe: !0,
                name: "materialWireframe",
              }));
          }
          (this.standardMaterial = this.getChunkMaterial(
            this.getCapabilities(),
            !1,
            !1
          )),
            this.updateRenderingMode(),
            a && this.setMaterialsUniform(Chunk.globalUniforms);
        }
        static setSide(e) {
          Chunk.side = e;
          for (const t in Chunk.chunkMaterials) {
            Chunk.chunkMaterials[t].name.includes("f") ||
              (Chunk.chunkMaterials[t].side = e);
          }
        }
        static setRenderingMode(e) {
          Chunk.renderingMode = e;
        }
        static setMaxVaryings(e) {
          g = e;
        }
        static disposeShared() {
          for (const e in Chunk.chunkMaterials) {
            const t = Chunk.chunkMaterials[e];
            for (const e in t.uniforms)
              "t" === t.uniforms[e].type && t.uniforms[e].value.dispose();
            t.dispose(), delete Chunk.chunkMaterials[e];
          }
        }
        dispose() {
          this.geometry.dispose();
        }
        static getUniformDefaults() {
          const e = {};
          for (const t in r.Z.modelChunk.uniforms) {
            const s = i.UniformsUtils.clone(r.Z.modelChunk.uniforms[t]);
            for (const t in s) e[t] = s[t];
          }
          return e;
        }
        set material(e) {
          if (this._material !== e && this.onMaterialUpdate)
            for (const t of this.onMaterialUpdate.values()) t(e);
          this._material = e;
        }
        get material() {
          return this._material;
        }
        notifyOnMaterialUpdated(e) {
          return (0, l.k1)(
            () => this.onMaterialUpdate.add(e),
            () => this.onMaterialUpdate.delete(e),
            !0
          );
        }
        setMeshTexture(e) {
          this.setMaterialsUniform({ map: e });
        }
        getColorOverlay() {
          return this._colorOverlay;
        }
        setColorOverlay(e) {
          this._colorOverlay !== e &&
            (this.setMaterialsUniform({ colorOverlay: e }),
            (this._colorOverlay = e));
        }
        setMeshTextureOpacity(e) {
          e !== this._meshTextureOpacity &&
            (this.setMaterialsUniform({ meshOpacity: e, panoOpacity: 1 - e }),
            (this._meshTextureOpacity = e));
        }
        setProgress(e) {
          this._progress !== e &&
            (this.setMaterialsUniform({ progress: e }), (this._progress = e));
        }
        opacityParams() {
          return {
            needTransparent: this.opacity < d.xx.FADE_OPAQUE,
            needDepthWrite: this.opacity >= d.xx.FADE_DEPTH_WRITE_THRESHOLD,
          };
        }
        setOpacity(e) {
          this.opacity = e;
          const { needTransparent: t, needDepthWrite: s } =
            this.opacityParams();
          return (
            this.onOpacityUpdate && this.onOpacityUpdate(e),
            t !== this._material.transparent || s !== this._material.depthWrite
          );
        }
        getOpacity() {
          return this.opacity;
        }
        setTime(e) {
          Chunk.renderingMode === c.S.Wireframe &&
            this.setMaterialsUniform({ time: e });
        }
        setTransparentDiscard(e) {
          this.setMaterialsUniform({ transparentDiscardDist: e });
        }
        setMeshPreviewSphere(e, t = 0.3) {
          this.setMaterialsUniform({
            meshPreviewCenter: e,
            meshPreviewSize: t,
          });
        }
        setWireframe(e) {
          if (e) {
            if (this.geometry.getIndex()) {
              const e = this.geometry;
              e.boundsTree && (e.boundsTree.geometry = this.geometry.clone()),
                this.geometry.copy(this.geometry.toNonIndexed());
            }
            (0, n.ko)(this.geometry);
          }
          this.overrideCapability(a.h.Wireframe, e);
        }
        setFlatShading(e) {
          e && this.geometry.computeVertexNormals(),
            this.overrideCapability(a.h.FlatShading, e);
        }
        getCapabilities() {
          const e = new Set();
          for (const t in this.capabilityOverrides)
            this.capabilityOverrides[t] && e.add(t);
          for (const t of y)
            if (!e.has(t.key) && t.enabled(this.uniformCache)) {
              e.add(t.key);
              for (const s of t.dependsOn) e.add(s);
            }
          return e;
        }
        overrideCapability(e, t) {
          (this.capabilityOverrides[e] = t), this.updateMaterialCapabilities();
        }
        updateMaterialCapabilities() {
          const e = this.getCapabilities(),
            t = this.standardMaterial,
            { needTransparent: s, needDepthWrite: i } = this.opacityParams();
          if (
            (0, h.TH)(t.capabilities, e) &&
            s === t.transparent &&
            i === t.depthWrite
          )
            return this._material;
          const r = this.getChunkMaterial(e, s, i);
          return (
            (this.standardMaterial = r),
            Chunk.renderingMode === c.S.Standard && (this.material = r),
            this._material
          );
        }
        getChunkMaterial(e, t, s) {
          let r = "chunkMaterial_";
          for (const t of y) r += e.has(t.key) ? "1" : "0";
          const o = -1 === this.meshGroup && -1 === this.meshSubgroup;
          if (
            (o ? (r += "f") : ((r += t ? "1" : "0"), (r += s ? "1" : "0")),
            !Chunk.chunkMaterials[r])
          ) {
            const a = new ChunkMaterial(
              r,
              e,
              this.getUniformsForCapabilities(e)
            );
            o
              ? ((a.side = i.BackSide),
                (a.transparent = !0),
                (a.depthWrite = !1))
              : ((a.transparent = t),
                (a.depthWrite = s),
                (a.side = Chunk.side)),
              (Chunk.chunkMaterials[r] = a);
          }
          return Chunk.chunkMaterials[r];
        }
        getUniformsForCapabilities(e) {
          const t = {};
          for (const s of e) {
            const e = r.Z.modelChunk.uniforms[s];
            for (const s in e)
              t[s] = i.UniformsUtils.clone(this.uniformCache[s]);
          }
          return t;
        }
        setMaterialsUniform(e, t = !1) {
          let s,
            i = !1;
          const r = this.uniformCache.meshPreviewCenter.value;
          for (const o in e) {
            let a = !1;
            const n = e[o];
            if (
              ((a =
                "meshPreviewCenter" !== o
                  ? a || x.has(o)
                  : a || (null === r) != (null === n)),
              !(o in this.uniformCache))
            )
              throw new Error(`Uniform ${o} does not exist in Chunk`);
            const h = this.uniformCache[o];
            h.value !== n &&
              ((h.value = m(h.value, n)),
              "opacity" === o && (s = n),
              t &&
                T.has(o) &&
                (Chunk.globalUniforms[o] = m(Chunk.globalUniforms[o], n)),
              (i = i || a));
          }
          return (
            void 0 !== s && (i = this.setOpacity(s) || i),
            i && this.updateMaterialCapabilities(),
            this._material
          );
        }
        updateRenderingMode() {
          Chunk.renderingMode === c.S.Standard
            ? (this.material = this.standardMaterial)
            : (this.material = Chunk.modeMaterials[Chunk.renderingMode]);
        }
        forEachMaterial(e) {
          for (const t in Chunk.chunkMaterials) e(Chunk.chunkMaterials[t]);
        }
        setProjectedPano(e, t, s, i, r = !1) {
          let o = 1 === e ? "pano1Map" : "pano0Map";
          const a = {};
          (a[o] = i || p),
            t &&
              ((o = 1 === e ? "pano1Position" : "pano0Position"), (a[o] = t)),
            s &&
              t &&
              ((o = 1 === e ? "pano1Matrix" : "pano0Matrix"),
              this.temp.m1.makeRotationFromQuaternion(
                this.temp.quat.copy(s).invert()
              ),
              this.temp.m2.makeScale(-1, 1, 1),
              (a[`${o}1`] = this.temp.m1),
              (a[`${o}2`] = this.temp.m2)),
            this.setMaterialsUniform(a, r);
        }
        setOverlayPano(e, t, s, r = !1) {
          const o = `overlay${e}`,
            a = {};
          if (t) {
            const e = new i.Matrix4().makeRotationFromQuaternion(t);
            a[o + "Matrix"] = e;
          }
          (a[o + "Map"] = s || p), this.setMaterialsUniform(a, r);
        }
        onBeforeDraw(e) {
          if (Chunk.renderingMode === c.S.Standard) {
            for (const t of Object.keys(e.uniforms))
              this.uniformCache[t] &&
                null !== this.uniformCache[t].value &&
                (e.uniforms[t].value = this.uniformCache[t].value);
            e.uniformsNeedUpdate = !0;
          }
        }
        getSortKey() {
          var e, t, s;
          return null !==
            (s =
              null ===
                (t =
                  null === (e = this.uniformCache.map) || void 0 === e
                    ? void 0
                    : e.value) || void 0 === t
                ? void 0
                : t.id) && void 0 !== s
            ? s
            : 0;
        }
      }
      (Chunk.chunkMaterials = {}),
        (Chunk.side = i.FrontSide),
        (Chunk.renderingMode = c.S.Standard),
        (Chunk.globalUniforms = {});
    },
    83358: (e, t, s) => {
      "use strict";
      s.d(t, { T: () => FallbackMesh });
      var i = s(2212),
        r = s(48358),
        o = s(17915);
      const a = new i.Vector3(0, 0, 0),
        n = new i.Vector3(100, 100, 100),
        h = new i.Vector3(),
        d = new i.Vector3(),
        l = new i.Box3();
      class FallbackMesh extends i.Mesh {
        constructor() {
          super(),
            (this.bounds = new i.Box3()),
            (this.geometry = new i.BoxBufferGeometry(1, 1, 1)),
            this.geometry.computeBoundingBox(),
            this.geometry.computeBoundingSphere(),
            (this.chunk = new o.z(-1, -1, this.geometry));
          const e = (e) => {
            this.material = e;
          };
          this.chunk.notifyOnMaterialUpdated(e),
            e(this.chunk.material),
            (this.name = "FallbackMesh"),
            (this.renderOrder = r.z.boundingSkybox),
            this.setFromCenterAndSize(a, n),
            (this.onBeforeRender = (e, t, s, r, o, a) => {
              o instanceof i.RawShaderMaterial && this.chunk.onBeforeDraw(o);
            });
        }
        setBounds(e) {
          if (this.bounds.equals(e)) return;
          this.bounds.copy(e);
          const t = e.getSize(h);
          this.position.copy(e.getCenter(d)),
            this.scale.set(t.x, t.y, t.z),
            this.updateMatrixWorld(!0);
        }
        setFromCenterAndSize(e, t = n) {
          this.setBounds(l.setFromCenterAndSize(e, t));
        }
      }
    },
    62955: (e, t, s) => {
      "use strict";
      s.d(t, { e: () => ModelMeshBase });
      var i = s(2212),
        r = s(44283);
      class ModelMeshBase extends i.Object3D {
        constructor() {
          super(...arguments),
            (this.boundingBox = new i.Box3()),
            (this.size = new i.Vector3()),
            (this.center = new i.Vector3()),
            (this._chunks = []),
            (this.onChunksLoaded = new Set());
        }
        get chunks() {
          return this._chunks;
        }
        get visibleChunks() {
          return this._chunks;
        }
        notifyOnChunksLoaded(e) {
          return (0, r.k1)(
            () => this.onChunksLoaded.add(e),
            () => this.onChunksLoaded.delete(e),
            !0
          );
        }
      }
    },
    32653: (e, t, s) => {
      "use strict";
      s.d(t, { s: () => RoomMeshData });
      var i = s(32770);
      class RoomMeshData extends i.V {
        constructor() {
          super(),
            (this.name = "room-mesh-data"),
            (this.floors = new Set()),
            (this.rooms = new Set());
        }
      }
    },
    59167: (e, t, s) => {
      "use strict";
      s.d(t, { n: () => MeshPreviewSetPositonCommand });
      var i = s(17386);
      class MeshPreviewSetPositonCommand extends i.m {
        constructor(e, t, s) {
          super(),
            (this.id = "MESH_PREVIEW_POSITION"),
            (this.payload = { enabled: e, previewCirclePosition: t, size: s });
        }
      }
    },
    41659: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => SetMeshOverlayCommand });
      var i,
        r,
        o = s(17386);
      !(function (e) {
        (e.all = "all"),
          (e.byMeshGroup = "byMeshGroup"),
          (e.byMeshSubGroup = "byMeshSubGroup");
      })(i || (i = {})),
        (function (e) {
          (e.explicit = "explicit"), (e.random = "random");
        })(r || (r = {}));
      class SetMeshOverlayCommand extends o.m {
        constructor(e, t) {
          super(),
            (this.id = "SET_MESH_OVERLAY_COLOR"),
            (this.payload = {
              selectBy: (null == t ? void 0 : t.style) || i.all,
              colorStyle: (null == e ? void 0 : e.style) || r.explicit,
              color: (null == e ? void 0 : e.color) || null,
              alpha: (null == e ? void 0 : e.alpha) || 0.5,
              index: null == t ? void 0 : t.index,
            });
        }
      }
      (SetMeshOverlayCommand.selectBy = i),
        (SetMeshOverlayCommand.colorBy = r),
        (SetMeshOverlayCommand.COLOR_DIM = { x: 0, y: 0, z: 0, w: 0.3 });
    },
    51858: (e, t, s) => {
      "use strict";
      s.d(t, { M: () => SetPanoOverlayCommand });
      var i = s(17386);
      class SetPanoOverlayCommand extends i.m {
        constructor(e, t, s) {
          super(),
            (this.id = "SET_PANO_OVERLAY"),
            (this.payload = { sweepId: e, texture: t, quaternion: s });
        }
      }
    },
    81638: (e, t, s) => {
      "use strict";
      s.d(t, { I: () => ToggleMeshOverlayColorCommand });
      var i = s(17386);
      class ToggleMeshOverlayColorCommand extends i.m {
        constructor(e) {
          super(),
            (this.id = "TOGGLE_MESH_OVERLAY_COLOR"),
            (this.payload = { enabled: e });
        }
      }
    },
    45298: (e, t, s) => {
      "use strict";
      var i;
      s.d(t, { k: () => i }),
        (function (e) {
          (e.Mesh = "mesh"),
            (e.PanoramaMesh = "mesh.inside"),
            (e.PanoramaCube = "cubemap.inside"),
            (e.Hidden = "mesh.hidden");
        })(i || (i = {}));
    },
    58004: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => ModelMeshModule });
      var i = s(47724),
        r = s(96909),
        o = s(21479),
        a = s(12216),
        n = s(59088),
        h = s(95395),
        d = s(8445),
        l = s(32306),
        u = s(75892),
        c = s(33512),
        m = s(64807),
        p = s(68576),
        f = s(88814),
        g = s(35597),
        M = s(5087),
        y = s(79437),
        x = s(2212),
        T = s(864);
      let w = !1;
      var v = s(59167),
        b = s(45298),
        S = s(80301),
        k = s(67027),
        C = s(60697),
        O = s(56247);
      const B = {
        meshTrimMatrices: [],
        meshTrimsDiscardContents: [],
        hasKeepVolume: !1,
      };
      class MeshTrimUniforms {
        constructor(e) {
          (this.floorUniforms = {}),
            (this.sharedFloorUniforms = {}),
            (this.isPanoMode = e);
        }
        setMeshTrim(e) {
          const { meshGroup: t, index: s, discardContents: i } = e,
            r = this.getEmptyCacheUniforms(),
            o = this.getFloorUniforms(t).meshTrimMatrices.slice();
          this.computeTrimMatrixFromTrim(e, o[s]),
            (r.meshTrimMatrices = o),
            (r.meshTrimsDiscardContents = this.setMeshTrimDiscardContents(
              t,
              s,
              i
            )),
            this.setFloorUniforms(t, r);
        }
        updateMeshTrimArrays(e, t) {
          const s = [],
            i = [];
          let r = !1;
          t.forEach((e) => {
            s.push(this.computeTrimMatrixFromTrim(e)),
              i.push(e.discardContents),
              r || (r = e.enabled && !e.discardContents);
          }),
            this.setFloorUniforms(e, {
              meshTrimMatrices: s,
              meshTrimsDiscardContents: i,
              hasKeepVolume: r,
            });
          `${e}` == `${C.eh}`
            ? Object.keys(this.sharedFloorUniforms).forEach((e) => {
                this.updateSharedFloorUniforms(e);
              })
            : this.updateSharedFloorUniforms(e);
        }
        computeTrimMatrixFromTrim(e, t = new x.Matrix4()) {
          return (
            e.enabled &&
            (!this.isPanoMode || (this.isPanoMode && e.activeInPanoMode))
              ? (t.compose(e.position, e.rotation, e.scale), t.invert())
              : t.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
            t
          );
        }
        setMeshTrimDiscardContents(e, t, s) {
          const i = this.getFloorUniforms(e).meshTrimsDiscardContents.slice();
          return (i[t] = s), i;
        }
        updateSharedFloorUniforms(e) {
          const t = this.getFloorUniforms(e),
            s = this.getFloorUniforms(C.eh),
            i = new x.Matrix4();
          i.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const r = this.concatUniformArrays(
              s.meshTrimMatrices,
              t.meshTrimMatrices,
              i
            ),
            o = this.concatUniformArrays(
              s.meshTrimsDiscardContents,
              t.meshTrimsDiscardContents,
              !0
            );
          this.setSharedFloorUniforms(e, {
            meshTrimMatrices: r,
            meshTrimsDiscardContents: o,
            hasKeepVolume: s.hasKeepVolume || t.hasKeepVolume,
          });
        }
        concatUniformArrays(e, t, s) {
          const i = e.concat(t).slice(0, O.t);
          for (let e = i.length; e < O.t; e++) i.push(s);
          return i;
        }
        getFloorUniforms(e) {
          return this.floorUniforms[`${e}`] || this.getEmptyCacheUniforms();
        }
        setFloorUniforms(e, t) {
          this.floorUniforms[`${e}`] = t;
        }
        getSharedFloorUniforms(e) {
          return (
            this.sharedFloorUniforms[`${e}`] || this.getEmptyCacheUniforms()
          );
        }
        setSharedFloorUniforms(e, t) {
          this.sharedFloorUniforms[`${e}`] = t;
        }
        getEmptyCacheUniforms() {
          return Object.assign({}, B);
        }
      }
      var D = s(10757),
        F = s(55356),
        P = s(88512),
        R = s(33874),
        I = s(43993),
        E = s(2388),
        U = s(75351),
        _ = s(22377),
        z = s(83358),
        G = s(41659),
        A = s(81638),
        V = s(91670),
        L = s(51858),
        Q = s(17915);
      const $ = new P.Z("modelrenderer");
      class ModelRenderer {
        constructor(e, t, s, i, r, o, a, n) {
          (this.scene = e),
            (this.container = t),
            (this.mesh = s),
            (this.panoRenderer = i),
            (this.meshData = r),
            (this.sweepData = o),
            (this.applicationData = a),
            (this.renderOptions = n),
            (this.chunkRenderingModeOverride = null),
            (this.lastChunkRenderingModeOverride = null),
            (this.fallbackMesh = new z.T()),
            (this.overlayColors = []),
            (this.toolMeshColorEnabled = !1),
            (this.TOOL_MESH_COLOR_OVERLAY = new x.Vector4(0, 0, 0, 0.3)),
            (this.overlayTextures = [
              {
                sweepId: void 0,
                texture: void 0,
                renderTarget: new x.WebGLCubeRenderTarget(2048, {
                  format: x.RGBAFormat,
                }),
                quaternion: new x.Quaternion(),
              },
              {
                sweepId: void 0,
                texture: void 0,
                renderTarget: new x.WebGLCubeRenderTarget(2048, {
                  format: x.RGBAFormat,
                }),
                quaternion: new x.Quaternion(),
              },
            ]),
            (this.overlayEnabled = !1),
            (this.bindings = []),
            (this.updateFallbackMesh = (() => {
              const e = new x.Box3();
              return () => {
                if (
                  this.sweepData.currentAlignedSweepObject &&
                  this.viewmodeData.isInside()
                ) {
                  const t = e.copy(this.meshData.bounds).expandByScalar(0.2);
                  this.fallbackMesh.setBounds(t);
                } else
                  this.cameraData &&
                    this.fallbackMesh.setFromCenterAndSize(
                      this.cameraData.pose.position
                    );
              };
            })()),
            (this.debugColorizeChunks = (() => {
              let e = !1;
              return (t, s) => {
                const i = new x.Vector4(1, 1, 1, 0);
                (e = !e),
                  ((e) => {
                    for (const t of this.mesh.chunks) {
                      const r = s ? 100 * t.id : 100 * t.meshSubgroup,
                        o = e ? (0, F.G1)(0.5, r) : i;
                      t.setColorOverlay(o);
                    }
                  })(t || e);
              };
            })());
        }
        init() {}
        dispose() {}
        async activate(e) {
          (this.engine = e),
            ([
              this.viewmodeData,
              this.settings,
              this.cameraData,
              this.renderer,
            ] = await Promise.all([
              e.market.waitForData(g.O),
              e.market.waitForData(R.e),
              e.market.waitForData(n.M_),
              e.getModuleBySymbol(r.y.WEBGL_RENDERER),
            ])),
            this.scene.add(this.container),
            this.scene.add(this.fallbackMesh),
            (this.fallbackMesh.layers.mask = this.container.layers.mask),
            this.updateRenderState(),
            this.bindings.push(
              this.viewmodeData.onChanged(this.updateRenderState.bind(this)),
              this.sweepData.onChanged(this.updateRenderState.bind(this)),
              this.settings.onChanged(this.updateRenderState.bind(this)),
              e.commandBinder.addBinding(
                G.u,
                this.onMeshOverlayCommand.bind(this)
              ),
              e.commandBinder.addBinding(
                A.I,
                this.toggleMeshOverlayColor.bind(this)
              ),
              e.commandBinder.addBinding(
                V.U,
                this.onSetChunkRenderStateCommand.bind(this)
              ),
              e.commandBinder.addBinding(
                L.M,
                this.onPanoOverlayCommand.bind(this)
              )
            ),
            this.bindings.push(
              this.mesh.notifyOnChunksLoaded((e) => {
                for (const t of this.overlayColors) t(e);
              })
            ),
            this.renderOptions.colorizeRooms && this.debugColorizeChunks(!0),
            this.renderOptions.colorizeChunks &&
              this.debugColorizeChunks(!0, !0),
            this.renderOptions.wireframe && this.toggleWireframe(!0),
            this.setupDebugMenu(e);
        }
        deactivate() {
          for (const e of this.bindings) e.cancel();
          (this.bindings = []),
            this.scene.remove(this.container),
            this.scene.remove(this.fallbackMesh),
            this.currentSweepId &&
              this.panoRenderer.freeTexture(this.currentSweepId),
            (this.currentSweepId = null),
            (this.targetSweepId = null);
        }
        updateSweepRenderTarget(e, t, s, i) {
          const r = this.panoRenderer.useTexture(t);
          if (r) {
            let t = !0;
            for (const o of this.allChunks())
              o.setProjectedPano(e, s, i, r, t), (t = !1);
          }
        }
        *allChunks() {
          yield* this.mesh.chunks, yield this.fallbackMesh.chunk;
        }
        updateExistingTexture(e, t, s, i) {
          let r = !0;
          for (const o of this.allChunks())
            e === this.currentSweepId && o.setProjectedPano(0, s, i, t, r),
              e === this.targetSweepId && o.setProjectedPano(1, s, i, t, r),
              (r = !1);
        }
        render() {}
        beforeRender() {
          var e;
          const { floorOpacity: t, floorFadeDist: s } =
            this.meshData.meshGroupVisuals;
          for (const i of this.mesh.visibleChunks)
            i.setMaterialsUniform({
              meshOpacity: this.meshData.meshTextureOpacity.value,
              panoOpacity: 1 - this.meshData.meshTextureOpacity.value,
              opacity:
                null !== (e = t.get(i.meshGroup)) && void 0 !== e ? e : 1,
              transparentDiscardDist: s.get(i.meshGroup) || 0,
              progress: this.sweepData.transition.progress.value,
            });
          const i = (0, y.w2)(this.meshData.meshTextureOpacity.value, 0, 1, 1);
          this.fallbackMesh.chunk.setMeshTextureOpacity(i),
            this.fallbackMesh.chunk.setProgress(
              this.sweepData.transition.progress.value
            ),
            this.updateFallbackMesh();
        }
        updateChunkMaterialMode(e, t) {
          const s = e ? x.DoubleSide : x.FrontSide;
          Q.z.setSide(s), Q.z.setRenderingMode(t || U.S.Standard);
          for (const e of this.mesh.chunks) e.updateRenderingMode();
        }
        updateRenderState() {
          if (
            this.viewmodeData.currentMode !== this.lastViewmode ||
            this.lastChunkRenderingModeOverride !==
              this.chunkRenderingModeOverride
          ) {
            this.lastChunkRenderingModeOverride =
              this.chunkRenderingModeOverride;
            const e = this.viewmodeData.isInside();
            this.updateChunkMaterialMode(e, this.chunkRenderingModeOverride),
              (this.lastViewmode = this.viewmodeData.currentMode);
          }
          if (
            (this.viewmodeData.transition.active &&
              (0, M.Bw)(this.viewmodeData.transition.to)) ||
            this.viewmodeData.isInside()
          ) {
            const e = this.sweepData.currentSweep,
              t = this.sweepData.transition,
              s =
                t.active &&
                (this.applicationData.phase === o.nh.PLAYING ||
                  this.applicationData.phase === o.nh.STARTING),
              i = s ? t.from : e,
              r = s ? t.to : e,
              a = this.currentSweepId,
              n = this.targetSweepId;
            (this.currentSweepId = i || null),
              (this.targetSweepId = r || null),
              this.handleSweepChange(0, a, this.currentSweepId),
              this.handleSweepChange(1, n, this.targetSweepId);
          }
          if (this.overlayEnabled) {
            const e = this.overlayTextures.find(
                (e) => e.sweepId === this.currentSweepId
              ),
              t = this.overlayTextures.find(
                (e) => e.sweepId === this.targetSweepId
              );
            let s = !0;
            for (const i of this.allChunks())
              i.setOverlayPano(
                0,
                e ? e.quaternion : void 0,
                e ? e.texture : void 0,
                s
              ),
                i.setOverlayPano(
                  1,
                  t ? t.quaternion : void 0,
                  t ? t.texture : void 0,
                  s
                ),
                (s = !1);
          }
        }
        handleSweepChange(e, t, s) {
          if (t !== s && (t && this.panoRenderer.freeTexture(t), s)) {
            const t = this.sweepData.getSweep(s);
            this.updateSweepRenderTarget(e, s, t.position, t.rotation);
          }
        }
        async onPanoOverlayCommand(e) {
          this.overlayEnabled = !0;
          const t = (t) => {
            const s = t.renderTarget;
            (t.renderTarget.width = e.texture.image.width),
              (t.renderTarget.height = e.texture.image.height),
              (t.sweepId = e.sweepId),
              (t.texture = s.texture),
              (t.quaternion = e.quaternion),
              this.renderer.cwfRenderer.copyCubemap(e.texture, t.renderTarget);
          };
          let s = !1;
          for (const i of this.overlayTextures)
            s || i.sweepId !== e.sweepId || (t(i), (s = !0));
          for (const e of this.overlayTextures)
            s ||
              e.sweepId === this.targetSweepId ||
              e.sweepId === this.currentSweepId ||
              (t(e), (s = !0));
          this.updateRenderState();
        }
        async onMeshOverlayCommand(e) {
          let t = () => !0;
          switch (e.selectBy) {
            case G.u.selectBy.all:
              (t = () => !0), (this.overlayColors.length = 0);
              break;
            case G.u.selectBy.byMeshGroup:
              t = (t) => t.meshGroup === e.index;
              break;
            case G.u.selectBy.byMeshSubGroup:
              t = (t) => t.meshSubgroup === e.index;
          }
          if (!t) return;
          let s = "rand";
          e.colorStyle === G.u.colorBy.explicit &&
            (s = e.color
              ? new x.Vector4(e.color.x, e.color.y, e.color.z, e.color.w)
              : null);
          const i = (i) => {
            for (const r of i)
              t(r) && r.setColorOverlay("rand" === s ? (0, F.G1)(e.alpha) : s);
          };
          i(this.mesh.chunks),
            (e.selectBy === G.u.selectBy.all && null === s) ||
              this.overlayColors.push(i);
        }
        async toggleMeshOverlayColor({ enabled: e }) {
          if (e !== this.toolMeshColorEnabled)
            return (
              (this.toolMeshColorEnabled = e),
              this.onMeshOverlayCommand({
                color: e ? this.TOOL_MESH_COLOR_OVERLAY : null,
                selectBy: G.u.selectBy.all,
                colorStyle: G.u.colorBy.explicit,
                alpha: 0.5,
              })
            );
        }
        async onSetChunkRenderStateCommand(e) {
          (this.chunkRenderingModeOverride = e.mode), this.updateRenderState();
        }
        toggleWireframe(e) {
          for (const t of this.mesh.chunks) t.setWireframe(e);
        }
        async setupDebugMenu(e) {
          const [t, s] = await Promise.all([
            e.market.waitForData(R.e),
            e.getModuleBySymbol(r.y.SETTINGS),
          ]);
          s.registerButton("Mesh", "Toggle visible", () => {
            this.container.visible = !this.container.visible;
          }),
            s.registerButton("Mesh", "Toggle depth", () => {
              const t = this.chunkRenderingModeOverride ? null : U.S.Depth;
              e.commandBinder.issueCommand(new V.U(t));
            }),
            s.registerButton("Mesh", "Toggle transparent", () => {
              const t = this.chunkRenderingModeOverride
                ? null
                : U.S.Transparent;
              e.commandBinder.issueCommand(new V.U(t));
            }),
            s.registerButton("Mesh", "Toggle wireframe", () => {
              const t = this.chunkRenderingModeOverride ? null : U.S.Wireframe;
              e.commandBinder.issueCommand(new V.U(t));
            });
          let i = !1;
          s.registerButton("Mesh", "Toggle flat shading", () => {
            i = !i;
            for (const e of this.mesh.chunks) e.setFlatShading(i);
          }),
            s.registerButton("Mesh", "Cycle all chunk materials", () => {
              this.debugCycleChunkMaterials();
            }),
            s.registerButton(
              "Mesh",
              "Highlight Rooms",
              this.debugColorizeChunks
            ),
            s.registerButton("Mesh", "Highlight Chunks", () =>
              this.debugColorizeChunks(!0, !0)
            );
          const o = (e, i, r, o, a) => {
            s.registerSetting(e, i, r, !0, I.SettingPersistence.NONE, a),
              t.onPropertyChanged(i, o);
          };
          o("Wireframe", E.Lp, !1, this.toggleWireframe.bind(this));
          const a = {
            [_.h.Wireframe]: {
              Wireframe: [
                "thickness",
                "wireframeOpacity",
                "stroke",
                "fillEnabled",
                "fill",
                "insideAltColor",
                "dualStroke",
                "secondThickness",
              ],
              "Wireframe Dashes": [
                "dashEnabled",
                "dashLength",
                "dashAnimate",
                "dashOverlap",
              ],
              "Wireframe Advanced": ["squeeze", "squeezeMin", "squeezeMax"],
            },
          };
          for (const e in a) {
            const t = O.Z.modelChunk.uniforms[e];
            for (const s in a[e])
              for (const i of a[e][s])
                o(
                  s,
                  i,
                  t[i].value,
                  (e) => {
                    for (const t of this.mesh.chunks)
                      t.setMaterialsUniform({ [i]: e });
                  },
                  t[i].range
                );
          }
        }
        async debugCycleChunkMaterials() {
          const e = [];
          for (const t in _.h) isNaN(Number(t)) && e.push(_.h[t]);
          const t = [];
          for (const e in U.S) isNaN(Number(e)) && t.push(U.S[e]);
          $.info(`Available ChunkMaterialCapabilities: ${e}`);
          const s = [];
          for (let t = 0; t < 1 << (e.length - 1); t++) {
            const i = {};
            for (let s = e.length - 1; s >= 0; s--) {
              i[e[s]] = Boolean(t & (1 << s));
            }
            s.push(i);
          }
          $.info(`There are ${s.length * t.length} options to test`);
          for (let e = 0; e < t.length; e++) {
            await this.engine.commandBinder.issueCommand(new V.U(e));
            for (const t of s) {
              $.info(
                `Testing ChunkRenderingMode.${
                  U.S[e]
                } with capabilities: ${JSON.stringify(t, void 0, 2)}`
              );
              const s = new x.Vector4(
                Math.random(),
                Math.random(),
                Math.random(),
                0.5
              );
              for (const e of Object.keys(t))
                for (const i of this.mesh.chunks)
                  i.setColorOverlay(s),
                    i.setMeshPreviewSphere(new x.Vector3(0, 0, 0)),
                    i.overrideCapability(e, t[e]);
              await (0, D.gw)(100);
            }
            await (0, D.gw)(100);
          }
          await this.engine.commandBinder.issueCommand(new V.U(null));
        }
      }
      var N = s(20331),
        q = s(6559);
      class MeshRenderPass {
        constructor(e, t, s = 128, i = 128) {
          (this.slots = e),
            (this.renderToTextureModule = t),
            (this.width = s),
            (this.height = i),
            (this.sizeMultiplier = 1 / 8),
            (this.pixelBuffer = new Uint8Array(4)),
            (this.readBuffer = null),
            (this.readPixelsAsync = Promise.resolve(this.pixelBuffer));
        }
        get renderTarget() {
          return (
            this._renderTarget ||
              (this._renderTarget = new x.WebGLRenderTarget(
                this.width,
                this.height,
                {
                  type: x.UnsignedByteType,
                  format: x.RGBAFormat,
                  depthBuffer: !1,
                  stencilBuffer: !1,
                  generateMipmaps: !1,
                  minFilter: x.NearestFilter,
                  magFilter: x.NearestFilter,
                }
              )),
            this._renderTarget
          );
        }
        pixels() {
          return this.pixelBuffer;
        }
        renderAndReadAsync(e, t) {
          this.beforeRender(),
            this.updateReadBufferSize(),
            (this.readPixelsAsync = this.renderToTextureModule
              .renderAndReadAsync(
                { mesh: e, camera: t, target: this.renderTarget, clear: !0 },
                { x: 0, y: 0, width: this.width, height: this.height },
                { buffer: this.pixelBuffer }
              )
              .then((e) => ((this.pixelBuffer = e), this.pixelBuffer))),
            this.afterRender();
        }
        render(e, t, s = !1, i = !0) {
          this.beforeRender();
          let { width: r, height: o } =
            this.renderToTextureModule.getRenderSize();
          (r = Math.max(1, Math.floor(r * this.sizeMultiplier))),
            (o = Math.max(1, Math.floor(o * this.sizeMultiplier))),
            (r === this.renderTarget.width && o === this.renderTarget.height) ||
              this.renderTarget.setSize(r, o),
            this.renderToTextureModule.render(this.renderTarget, e, t),
            s && this.renderToScreen(),
            i && this.afterRender();
        }
        renderToScreen() {
          this.renderToTextureModule.renderToScreen(this.renderTarget, !1);
        }
        readPixels() {
          this.updateReadBufferSize();
          const e = this.pixelBuffer;
          return (
            (this.pixelBuffer = this.renderToTextureModule.getRenderTargetData(
              this.renderTarget,
              e
            )),
            this.pixelBuffer
          );
        }
        updateReadBufferSize() {
          const e = this.renderTarget.width * this.renderTarget.height * 4;
          this.pixelBuffer.length !== e &&
            (this.pixelBuffer = new Uint8Array(e));
        }
        beforeRender() {
          (this.width === this.renderTarget.width &&
            this.height === this.renderTarget.height) ||
            this.renderTarget.setSize(this.width, this.height);
          for (const e of this.slots)
            for (const t of e.chunks) this.beforeRenderChunk(t, e);
        }
        afterRender() {
          for (const e of this.slots)
            for (const t of e.chunks) this.afterRenderChunk(t, e);
        }
      }
      class TextureQualityRenderPass extends MeshRenderPass {
        constructor() {
          super(...arguments), (this.prevColor = new WeakMap());
        }
        beforeRenderChunk(e, t) {
          this.prevColor.set(t, e.getColorOverlay()),
            e.setColorOverlay((0, q.O7)(t.quality));
        }
        afterRenderChunk(e, t) {
          var s;
          e.setColorOverlay(
            null !== (s = this.prevColor.get(t)) && void 0 !== s ? s : null
          );
        }
      }
      class TextureScoreRenderPass extends MeshRenderPass {
        constructor() {
          super(...arguments), (this.prevColor = new WeakMap());
        }
        beforeRender() {
          (this.maxValue = this.slots.reduce(
            (e, t) => Math.max(e, t.screenCoverageScore),
            1e-9
          )),
            super.beforeRender();
        }
        beforeRenderChunk(e, t) {
          const s = t.screenCoverageScore / this.maxValue,
            i = new x.Vector4(s, s, s, 1);
          this.prevColor.set(t, e.getColorOverlay()), e.setColorOverlay(i);
        }
        afterRenderChunk(e, t) {
          var s;
          e.setColorOverlay(
            null !== (s = this.prevColor.get(t)) && void 0 !== s ? s : null
          );
        }
      }
      var Z = s(58232),
        j = s(17916);
      class MeshTextureSlot {
        constructor(e, t = j.V.Standard, s) {
          (this.lod = t),
            (this.chunkedTexInfo = s),
            (this.chunks = new Set()),
            (this.loading = !1),
            (this.unloaded = !1),
            (this.screenCoverage = 0),
            (this.screenCoverageScore = 0),
            (this.sightings = new Z.P(E.ZP.sightingMaxAge)),
            (this.textureName = e),
            (this.lod = t),
            s &&
              ((0, q.qT)().registerQualities(
                t,
                s.maxTextureSize,
                s.maxTexelSize,
                s.minScale
              ),
              (this.quality = (0, q.qT)().min(t)),
              (this.targetQuality = this.quality)),
            (this.minQuality = (0, q.qT)().min(t)),
            (this.maxQuality = this.minQuality);
        }
        setTexture(e) {
          const t = this.texture;
          if (((this.texture = e), t && t !== e && t.dispose(), e))
            for (const t of this.chunks) t.setMeshTexture(e);
        }
        async getUrl(e) {
          const t = (0, q.qT)().get(e),
            { assetType: s } = t;
          if (this.textureData) {
            let e = this.textureName;
            if (!this.chunkedTexInfo) {
              const t = this.textureName.match(/[_.]([0-9]{3})[_.]/);
              if (!t)
                throw new Error(
                  `Could not parse texture index from texture name: ${this.textureName}`
                );
              e = t[1];
            }
            return (await this.textureData[s].get()).urlTemplate.replace(
              "<texture>",
              e
            );
          }
          {
            const e = this.textureName.match(/^([a-f0-9]+(_10k|_50k)?)/);
            if (!e)
              throw new Error(
                `Unknown format for texture name: ${this.textureName}`
              );
            return `${e[0]}_texture_jpg_${s}/${this.textureName}`;
          }
        }
        getEmbeddedTexture() {
          var e;
          const t =
            null === (e = this.chunks.entries().next()) || void 0 === e
              ? void 0
              : e.value;
          return t ? t[0].embeddedTexture : void 0;
        }
      }
      class TextureBudgeter {
        constructor(e, t, s = 0.85) {
          (this.renderer = e),
            (this.maxBudget = t),
            (this.pctTotalMemory = s),
            (this.lods = new Map()),
            (this.orders = {}),
            (this.slotTexSizes = new Map());
        }
        update(e) {
          this.updateBudget(void 0), this.updateTargetQualitiesFromBudget();
        }
        updateBudget(e) {
          if (e) {
            this.slots = e;
            const t = (0, q.qT)();
            e.forEach((e) => {
              const s = this.lods.get(e.lod) || new Set();
              s.add(e),
                this.lods.set(e.lod, s),
                (this.orders[e.lod] = t.order(e.lod));
            });
          }
          if (this.shouldRestrictBudget()) {
            const e = this.calcCurrentTexturesSize(),
              t = this.renderer.estimatedGPUMemoryAllocated() - e,
              s = this.maxBudget() - t;
            this.budget = s * this.pctTotalMemory;
          } else this.budget = 1 / 0;
          return this;
        }
        updateTargetQualitiesFromBudget() {
          let e = 0;
          for (const t of this.slots)
            this.updateBudgetSize(t),
              (t.targetQuality = t.minQuality),
              (e += this.getBudgetSize(t, t.targetQuality));
          const t = (t, s) =>
            t.maxQuality < s ||
            ((e -= this.getBudgetSize(t, t.targetQuality)),
            (e += this.getBudgetSize(t, s)),
            !(e > this.budget) && ((t.targetQuality = s), !0));
          if (this.shouldRestrictBudget()) {
            for (const e of this.slots)
              for (const s of this.orders[e.lod]) if (!t(e, s)) return;
          } else
            for (const [e, s] of this.lods.entries())
              for (const i of this.orders[e])
                for (const e of s) if (!t(e, i)) return;
        }
        shouldRestrictBudget() {
          return this.maxBudget() !== 1 / 0;
        }
        getBudgetSize(e, t) {
          if (!t) return 0;
          const s = (0, q.qT)().get(t);
          let i = 0;
          if (e) {
            const s = (0, q.qT)().min(e.lod);
            s !== t && e.getEmbeddedTexture() && (i = this.getBudgetSize(e, s));
            const r = e.textureName + t,
              o = this.slotTexSizes.get(r);
            if (o) return o + i;
          }
          return (s ? s.textureSize : 4096) ** 2 * 4 + i;
        }
        updateBudgetSize(e) {
          var t;
          const s = e.textureName + e.quality,
            i =
              null !== (t = e.texture) && void 0 !== t
                ? t
                : e.getEmbeddedTexture();
          this.slotTexSizes.set(s, this.texSizeBytes(i));
        }
        calcCurrentTexturesSize() {
          return this.slots.reduce((e, t) => {
            var s;
            const i = t.getEmbeddedTexture(),
              r = null !== (s = t.texture) && void 0 !== s ? s : i;
            return r === i
              ? e + this.texSizeBytes(r)
              : e + this.texSizeBytes(r) + this.texSizeBytes(i);
          }, 0);
        }
        texSizeBytes(e) {
          if (!e) return 0;
          if (e.mipmaps.length > 0)
            return e.mipmaps.reduce((e, t) => e + t.data.length, 0);
          let t = e.image.width * e.image.height * 4,
            s = t / 4;
          for (; s >= 1; ) (t += s), (s /= 4);
          return t;
        }
      }
      var W = s(69626),
        H = s(27408),
        Y = s(67502),
        J = s(84303);
      const K = new P.Z("tex-lod");
      class MeshTextureLoader {
        constructor(e, t, s, i, r, o, a, n, h, d) {
          (this.textureLOD = e),
            (this.urls = t),
            (this.modelObject = s),
            (this.camera = i),
            (this.cameraData = r),
            (this.renderer = o),
            (this.renderToTextureModule = a),
            (this.engine = n),
            (this.chunkVisibilityChecker = h),
            (this.rendererModule = d),
            (this.name = "texture-streaming"),
            (this.slots = []),
            (this.textureNameToSlot = {}),
            (this.chunkIdToSlot = {}),
            (this._systemMin = q.S7.LOW),
            (this._systemMax = q.S7.ULTRA),
            (this.allowTextureDownload = () => !0),
            (this.concurrentLoadingTextures = 1),
            (this.concurrentDownloadingTiles = 12),
            (this.autoLoadTiles = !1),
            (this.lastSortedAt = 0),
            (this.loadingTextures = 0),
            (this.downloadingTiles = 0),
            (this.totalTextures = {}),
            (this.totalTiles = 0),
            (this.textureQualityRenderPass = new TextureQualityRenderPass(
              this.slots,
              this.renderToTextureModule
            )),
            (this.textureScoreRenderPass = new TextureScoreRenderPass(
              this.slots,
              this.renderToTextureModule
            )),
            (this._chunkSlotsSet = new Set());
        }
        setModel(e, t, s, i) {
          (this.textureApiInfo = s),
            (this.modelObject = e),
            (this.slots.length = 0),
            (this.textureNameToSlot = {}),
            (this.chunkIdToSlot = {}),
            this.addChunkSlots([...t]),
            (this.textureBudgeter = new TextureBudgeter(
              this.rendererModule,
              i
            )),
            this.textureBudgeter.updateBudget(this.slots),
            this.updateSystemQualityRanges(),
            this.chunkVisibilityChecker.notifyOnNewSighting((e, t) => {
              const s = this.addChunkSlots([e]);
              for (const e of s) e.sightings.push(t);
            });
        }
        addChunkSlots(e) {
          this._chunkSlotsSet.clear();
          let t = !1;
          for (const s of e) {
            const e = s.textureName;
            let i = this.textureNameToSlot[e];
            i ||
              ((t = !0),
              (i = new MeshTextureSlot(e, s.lod, s.textureLODInfo)),
              s.embeddedTexture && i.setTexture(s.embeddedTexture),
              this.textureApiInfo && (i.textureData = this.textureApiInfo),
              (this.textureNameToSlot[s.textureName] = i),
              this.slots.push(i)),
              i.chunks.has(s) ||
                ((t = !0),
                i.chunks.add(s),
                i.texture && s.setMeshTexture(i.texture)),
              this._chunkSlotsSet.add(i),
              (this.chunkIdToSlot[s.id] = i);
          }
          return (
            t &&
              this.textureBudgeter &&
              (this.textureBudgeter.updateBudget(this.slots),
              this.updateSystemQualityRanges()),
            this._chunkSlotsSet
          );
        }
        removeChunks(e) {
          for (const t of e) {
            const e = this.chunkIdToSlot[t.id];
            if (e) {
              if ((e.chunks.delete(t), 0 === e.chunks.size)) {
                (e.unloaded = !0), e.setTexture(null);
                const s = this.slots.indexOf(e);
                this.slots.splice(s, 1),
                  delete this.textureNameToSlot[t.textureName];
              }
              delete this.chunkIdToSlot[t.id];
            } else K.error("Missing slot for chunk!");
          }
        }
        setQuality(e, t) {
          (this._systemMin = e),
            (this._systemMax = t),
            this.updateSystemQualityRanges();
        }
        updateSystemQualityRanges() {
          const e = (0, q.qT)();
          (this.minQuality = {}), (this.maxQuality = {});
          for (const t of new Set([...this.slots.map((e) => e.lod)]).values())
            (this.minQuality[t] = e.nearestQuality(t, this._systemMin)),
              (this.maxQuality[t] = e.nearestQuality(t, this._systemMax));
          for (const e of this.slots)
            (e.minQuality = this.minQuality[e.lod]),
              (e.maxQuality = e.maxQuality
                ? Math.min(this.maxQuality[e.lod], e.maxQuality)
                : this.maxQuality[e.lod]);
        }
        get textureCount() {
          return this.slots.length;
        }
        loadAll(e) {
          if (!this.slots[0] || !this.slots[0].textureName)
            return Promise.resolve([]);
          const t = (0, q.qT)();
          if (!t.valid(e))
            return K.warn(e, "not found in", t), Promise.resolve([]);
          const s = this.slots.map((t) => this.loadTexture(t, e, !1));
          return Promise.all(s);
        }
        async loadTexture(e, t, s = !0) {
          var i, r;
          const o = (0, q.qT)();
          o.valid(t) || K.warn(t, "not found in", o);
          const a = o.get(t),
            n =
              (null === (i = e.chunkedTexInfo) || void 0 === i
                ? void 0
                : i.maxTextureSize) || a.assetSize,
            h = Math.min(n, a.textureSize);
          e.lastLoadedAt = performance.now();
          let d = e.texture;
          if (!d || t !== e.quality) {
            if (d && t < e.quality && e.texture) {
              const s =
                null === (r = e.chunks.values().next().value) || void 0 === r
                  ? void 0
                  : r.embeddedTexture;
              if (
                s &&
                s.image.width >= h &&
                s.mipmaps[0].data.length <= h * h * 4
              )
                return (e.quality = t), void e.setTexture(s);
              {
                const s = this.renderToTextureModule.resizeTexture(d, h);
                return X(s, e), (e.quality = t), void e.setTexture(s);
              }
            }
            (e.loading = !0),
              this.loadingTextures++,
              (this.totalTextures[h] = (this.totalTextures[h] || 0) + 1);
            try {
              const i = await e.getUrl(t);
              (d =
                this.textureLOD !== S.l.NONE && s
                  ? await this.loadTextureTiled(i, h, t, e)
                  : await this.loadTextureSolid(i, h, t)),
                e.unloaded ? d.dispose() : (X(d, e), e.setTexture(d));
            } catch (e) {
            } finally {
              this.loadingTextures--, (e.quality = t), (e.loading = !1);
            }
          }
        }
        async loadTextureTiled(e, t, s, i) {
          var r;
          const o = this.renderer.initSizedTexture2D(t, {
              generateMipmaps: !1,
              minFilter: x.LinearFilter,
              magFilter: x.LinearFilter,
            }),
            a = (0, q.qT)(),
            n =
              (null === (r = i.chunkedTexInfo) || void 0 === r
                ? void 0
                : r.maxTextureSize) || a.get(s).assetSize,
            h = Math.min(n, a.get(s).textureSize),
            d = Math.min(h, a.get(s).tileSize),
            l = n / (h / d),
            u = async (t, s) => {
              const i = {};
              let r;
              l !== d && (i.width = `${d}`),
                l !== n && (i.crop = `${l},${l},x${t / h},y${s / h}`),
                (this.downloadingTiles += 1),
                (this.totalTiles += 1);
              const a = E.ZP.flipDownload;
              try {
                r = await this.urls.getImageBitmap(
                  e,
                  d,
                  d,
                  { priority: N.RequestPriority.LOW, flipY: a },
                  i
                );
              } finally {
                this.downloadingTiles -= 1;
              }
              const u = t,
                c = E.ZP.flipUpload ? h - s - d : s,
                m = new Y._(
                  "mesh/texture/upload-tiles",
                  () =>
                    this.engine.after(J.A.End).then(() => {
                      var e, t;
                      (o.flipY = a && r instanceof HTMLImageElement),
                        this.renderer.uploadTexture2D(r, o, u, c),
                        null === (t = (e = r).close) ||
                          void 0 === t ||
                          t.call(e);
                    }),
                  100
                );
              return (await this.engine.commandBinder.issueCommand(m)).promise;
            },
            c = [];
          for (let e = 0; e < h; e += d)
            for (let t = 0; t < h; t += d) c.push(u(e, t));
          try {
            await Promise.all(c);
          } catch (e) {
            throw (o.dispose(), e);
          }
          return o;
        }
        async loadTextureSolid(e, t, s) {
          var i, r;
          const o = this.renderer.initSizedTexture2D(t);
          try {
            const t = (0, q.qT)().get(s).textureSize,
              a = E.ZP.flipDownload,
              n = await this.urls.getImageBitmap(
                e,
                t,
                t,
                { priority: N.RequestPriority.LOW, flipY: a },
                { width: `${t}` }
              );
            (o.flipY = a && n instanceof HTMLImageElement),
              this.renderer.uploadTexture2D(n, o, 0, 0),
              null === (r = (i = n).close) || void 0 === r || r.call(i);
          } catch (e) {
            throw (o.dispose(), e);
          }
          return o;
        }
        analyzeTextureScreenCoverageFromRaycasts() {
          const e = window.innerWidth,
            t = new x.Vector3().copy(this.cameraData.pose.position),
            s = (0, q.qT)();
          for (const i of this.slots) {
            (i.screenCoverage = 0),
              (i.screenCoverageScore = 0),
              (i.maxQuality = i.minQuality);
            const r = i.sightings.getList(),
              o = i.sightings.index - 1;
            for (let a = 0; a < r.length; a++) {
              const n = r[(o - a + r.length) % r.length];
              if (
                n.raycastAge <
                this.chunkVisibilityChecker.raycastCounter - E.ZP.sightingMaxAge
              )
                break;
              const h = t.distanceTo(n.point),
                d = (0, W._U)(h, this.camera.projectionMatrix, e);
              let l = s.fromPixelSize(i.lod, d);
              (l = Math.min(l, this.maxQuality[i.lod])),
                (i.screenCoverageScore += l),
                (i.screenCoverage += 1),
                (i.maxQuality = Math.max(l, i.maxQuality));
            }
          }
          this.slots.sort(
            (e, t) => t.screenCoverageScore - e.screenCoverageScore
          ),
            this.textureBudgeter.updateTargetQualitiesFromBudget();
        }
        update(e) {
          if (!this.camera || !this.autoLoadTiles) return;
          this.textureBudgeter.update(e);
          const t = performance.now();
          this.textureLOD === S.l.RAYCAST && this.scheduleRaycastTasks(t);
          let s = !1;
          for (let e = this.slots.length - 1; e >= 0; e--) {
            const i = this.slots[e],
              r = (0, H.uZ)(i.targetQuality, i.minQuality, i.maxQuality),
              o = t - i.lastLoadedAt < 1e3;
            if (!i.loading && i.quality > r) {
              o ? (s = !0) : this.loadTexture(i, r);
              break;
            }
          }
          if (this.allowTextureDownload() && !s) {
            const e = (0, q.qT)();
            for (const t of this.slots) {
              if (
                this.loadingTextures >= this.concurrentLoadingTextures ||
                this.downloadingTiles >= this.concurrentDownloadingTiles
              )
                break;
              const s = (0, H.uZ)(t.targetQuality, t.minQuality, t.maxQuality);
              !t.loading &&
                t.quality < s &&
                this.loadTexture(t, e.moreDetailed(t.lod, t.quality));
            }
          }
          E.ZP.debugRttScores &&
            this.textureScoreRenderPass.render(
              this.modelObject,
              this.camera,
              !0,
              E.ZP.debugRttClear
            ),
            E.ZP.debugRttQuality &&
              this.textureQualityRenderPass.render(
                this.modelObject,
                this.camera,
                !0,
                E.ZP.debugRttClear
              );
        }
        scheduleRaycastTasks(e) {
          if (!this.analyzeTaskPromise && e - this.lastSortedAt > 200) {
            const e = () => {
                this.analyzeTextureScreenCoverageFromRaycasts(),
                  (this.lastSortedAt = performance.now());
              },
              t = async (e) => {
                await e.promise, (this.analyzeTaskPromise = null);
              },
              s = new Y._("mesh/texture/analyze-screen-coverage", e, 100);
            this.analyzeTaskPromise = this.engine.commandBinder
              .issueCommand(s)
              .then(t);
          }
        }
      }
      function X(e, t) {
        e.addEventListener("dispose", () => {
          e === t.texture &&
            K.warn("Streamed texture disposed while still in use");
        });
      }
      var ee = s(32653),
        te = s(76863),
        se = s(21922),
        ie = s(86980),
        re = s(44283);
      const oe = Math.round(E.ZP.sightingMaxAge / 60 / 5) || 1;
      class ChunkVisibilityChecker {
        constructor(e, t, s) {
          (this.scene = e),
            (this.raycaster = t),
            (this.raycastCounter = 0),
            (this.onNewSighting = new Set()),
            (this.poseSetAt = 0),
            (this.raycastRandomScreenLocation = (() => {
              const e = new x.Vector3(),
                t = new x.Vector3(),
                s = new x.Vector3();
              return (i, r, o) => {
                this.raycastCounter++;
                const a = (2 - 2 * r) / i,
                  n = -1 + r,
                  h = this.raycastCounter % (i * i),
                  d = h % i,
                  l = n + ((h - d) / i) * a,
                  u = n + d * a + Math.random() * a,
                  c = l + Math.random() * a;
                e.set(u, c, -1).unproject(this.camera),
                  t.set(u, c, 1).unproject(this.camera),
                  s.subVectors(t, e).normalize();
                const m = this.raycaster.pick(e, s, te.Pv);
                if (m) {
                  if (m.face && m.object instanceof se.g) {
                    const e = m.object.getChunk(m.face.materialIndex),
                      t = {
                        point: m.point.clone(),
                        raycastAge: this.raycastCounter,
                      };
                    for (const s of this.onNewSighting.values()) s(e, t);
                  }
                  o && o(m);
                }
              };
            })()),
            (this.camera = e.camera),
            s.pose.onChanged(() => {
              this.poseSetAt = this.raycastCounter;
            });
        }
        update() {
          const e = E.ZP.debugLOD ? (0, ie.e)(65280, this.scene) : void 0,
            t = performance.now();
          for (
            let s = 0;
            s < oe &&
            performance.now() - t < 0.5 &&
            this.raycastCounter <= this.poseSetAt + E.ZP.sightingMaxAge;
            s++
          )
            this.raycastRandomScreenLocation(5, 0.05, e);
        }
        notifyOnNewSighting(e) {
          return (0, re.k1)(
            () => this.onNewSighting.add(e),
            () => this.onNewSighting.delete(e),
            !0
          );
        }
      }
      class ModelMeshModule extends i.Y {
        constructor() {
          super(...arguments),
            (this.name = "model-mesh"),
            (this.onMeshTrimGroupChanged = (e) => {
              this.setTrimsForMeshGroup(e);
            }),
            (this.updateTrimVisibilityForViewmode = (e) => {
              if (e !== this.meshTrimUniforms.isPanoMode) {
                this.meshTrimUniforms.isPanoMode = e;
                for (const e of this.meshTrimData.meshTrimsByMeshGroup.keys)
                  this.setTrimsForMeshGroup(e);
              }
            }),
            (this.updateMeshTrim = (e) => {
              this.meshTrimUniforms.setMeshTrim(e),
                this.setTrimsForMeshGroup(e.meshGroup);
            }),
            (this._renderMode = b.k.Hidden);
        }
        async init(e, t) {
          w ||
            ((x.Mesh.prototype.raycast = T.uL),
            (x.BufferGeometry.prototype.computeBoundsTree = T.Xy),
            (x.BufferGeometry.prototype.disposeBoundsTree = T.sn),
            (w = !0)),
            (this.engine = t),
            (this.market = t.market);
          const [i, a, c, p, f, y, S, k, C, O] = await Promise.all([
              t.getModuleBySymbol(r.y.WEBGL_RENDERER),
              t.getModuleBySymbol(r.y.RAYCASTER),
              t.getModule(h.default),
              t.market.waitForData(d.T),
              t.getModuleBySymbol(r.y.INPUT),
              t.getModule(l.default),
              t.market.waitForData(n.M_),
              t.market.waitForData(g.O),
              t.market.waitForData(u.Z),
              t.getModuleBySymbol(r.y.SWEEP_PANO),
            ]),
            B = await t.getModuleBySymbol(r.y.SETTINGS);
          (this.appData = await t.market.waitForData(o.pu)),
            (this.sweepData = C),
            (this.viewmodeData = k);
          const D = i.getScene(),
            F = c.getSignedUrls(),
            P = p.model,
            R = P.uuid,
            I = t.claimRenderLayer(this.name);
          this.panoRenderer = O.getRenderer();
          const U = new ee.s();
          Q.z.setMaxVaryings(i.maxVaryings),
            (this.chunkVisibiltyChecker = new ChunkVisibilityChecker(
              D,
              a.picking,
              S
            ));
          const _ =
            P.tileset && B.tryGetProperty(E.iT, !1)
              ? await Promise.all([s.e(47), s.e(670), s.e(38), s.e(983)]).then(
                  s.bind(s, 92132)
                )
              : await Promise.all([s.e(947), s.e(321)]).then(s.bind(s, 51344));
          (this.modelMesh = await _.createModelMesh({
            uuid: R,
            urls: F,
            renderLayer: I,
            engine: t,
            settings: E.ZP,
            modelData: p,
            roomMeshData: U,
            chunkFactory: (e, t, s, i) => {
              const r = new Q.z(e, t, s, i, !0);
              if (this.meshTrimUniforms) {
                const t = this.meshTrimUniforms.getSharedFloorUniforms(e);
                r.setMaterialsUniform(t);
              }
              return r;
            },
            chunkVisibilityChecker: this.chunkVisibiltyChecker,
          })),
            this.engine.market.register(this, ee.s, U);
          let z = Promise.resolve();
          const G = this.modelMesh;
          this.setupMarketData(G.chunks, C),
            (this.modelTextureLoader = new MeshTextureLoader(
              e.textureLOD,
              F,
              this.modelMesh,
              D.camera,
              S,
              i.cwfRenderer,
              y,
              t,
              this.chunkVisibiltyChecker,
              i
            )),
            this.setTextureStreamMode(e.textureLOD),
            (z = this.modelMesh.initTextureLoader(
              this.modelTextureLoader,
              p.model.textures
            )),
            a.setupOctree(this.modelMesh.boundingBox),
            this.modelMesh.registerCollision(f),
            (this.renderer = new ModelRenderer(
              D.scene,
              this.modelMesh,
              this.modelMesh,
              this.panoRenderer,
              this.meshData,
              this.sweepData,
              this.appData,
              e
            )),
            await t.addComponent(this, this.renderer),
            await z,
            this.setRenderMode(
              this.viewmodeData.closestMode === M.Ey.Panorama
                ? b.k.PanoramaMesh
                : b.k.Mesh
            ),
            this.bindings.push(
              this.engine.subscribe(m.Z, (e) => {
                this.renderer.updateExistingTexture(
                  e.sweepId,
                  e.renderTarget.texture
                );
              })
            ),
            this.bindings.push(
              t.commandBinder.addBinding(
                v.n,
                this.setPreviewPosition.bind(this)
              )
            ),
            e.meshTrimEnabled
              ? await this.bindMeshTrimListeners()
              : this.bindMeshTrimListeners();
        }
        onUpdate(e) {
          this.modelMesh.onUpdate(),
            this.modelTextureLoader &&
              !E.ZP.debugPauseTexStream &&
              this.modelTextureLoader.update(e),
            this.chunkVisibiltyChecker && this.chunkVisibiltyChecker.update(),
            this.meshData.meshTextureOpacity.active &&
              (this.meshData.meshTextureOpacity.updateProgress(
                this.viewmodeData.transition.progress
              ),
              this.meshData.commit());
          const t = performance.now() / 1e3;
          for (const e of this.modelMesh.chunks) e.setTime(t);
        }
        setupMarketData(e, t) {
          var s;
          const i = new Map(),
            r = new Map(),
            o = new x.Box3();
          e.forEach((e) => {
            e.geometry.boundingBox && o.union(e.geometry.boundingBox),
              i.set(e.meshGroup, (i.get(e.meshGroup) || []).concat(e)),
              r.set(e.meshSubgroup, (r.get(e.meshSubgroup) || []).concat(e));
          });
          const n = new x.Vector3(),
            h = new x.Vector3(),
            d = o.getSize(h).multiplyScalar(0.5).length();
          o.getCenter(n);
          const l = new x.Box3();
          t.iterate((e) => {
            e.isUnplaced() ||
              (l.setFromCenterAndSize(e.position, a.f.UNIT), o.union(l));
          });
          const u = new k._(0, [...o.min.toArray(), ...o.max.toArray()]);
          (u.meshCenter = n),
            (u.meshRadius = d),
            (u.maxPlacementRadius = 3 * d);
          for (const [e, t] of i.entries()) {
            const i = new x.Box3();
            t.forEach((e) => {
              e.geometry.boundingBox && i.union(e.geometry.boundingBox);
            }),
              u.meshGroups.floors.add({
                meshGroup: e,
                boundingBox: i,
                parentMeshGroup: null,
              });
            const o = [...new Set(t.map((e) => e.meshSubgroup))].sort(
              (e, t) => t - e
            );
            u.meshGroups.roomsByFloor.set(e, o);
            const a = u.meshGroups.rooms;
            for (const t of o) {
              const i = new x.Box3();
              (r.get(t) || []).forEach((e) => {
                e.geometry.boundingBox && i.union(e.geometry.boundingBox);
              });
              const o = { meshGroup: t, boundingBox: i, parentMeshGroup: e },
                n = a.get(t);
              n
                ? (n.parentMeshGroup = Math.min(
                    null !== (s = n.parentMeshGroup) && void 0 !== s
                      ? s
                      : 1 / 0,
                    e
                  ))
                : a.set(t, o);
            }
            u.meshGroupVisuals.floorOpacity.set(e, 1),
              u.meshGroupVisuals.floorFadeDist.set(e, 0);
          }
          (this.meshData = u), this.market.register(this, k._, this.meshData);
        }
        async bindMeshTrimListeners() {
          (this.meshTrimData = await this.engine.market.waitForData(c.Z)),
            (this.meshTrimUniforms = new MeshTrimUniforms(
              this.viewmodeData.isPano()
            ));
          const { meshTrimsByMeshGroup: e } = this.meshTrimData;
          this.meshTrimData.onMeshGroupChanged(this.onMeshTrimGroupChanged),
            this.meshTrimData.onMeshTrimChanged(this.updateMeshTrim),
            this.bindings.push(
              this.engine.subscribe(p.Z, (e) => {
                e.fromMode === M.Ey.Panorama &&
                  this.updateTrimVisibilityForViewmode(
                    e.toMode === M.Ey.Panorama
                  );
              }),
              this.engine.subscribe(f.Z, (e) => {
                this.updateTrimVisibilityForViewmode(
                  e.toMode === M.Ey.Panorama
                );
              })
            ),
            e.keys.forEach((e) => {
              this.setTrimsForMeshGroup(e);
            }),
            this.setMaterialsUniforms(C.eh);
        }
        setTrimsForMeshGroup(e) {
          const t = this.meshTrimData.getTrimsForMeshGroup(e);
          this.meshTrimUniforms.updateMeshTrimArrays(e, t),
            this.setMaterialsUniforms(e);
        }
        setMaterialsUniforms(e) {
          const t = `${e}`;
          if (t === `${C.eh}`)
            this.modelMesh.chunks.forEach((e) => {
              const t = this.meshTrimUniforms.getSharedFloorUniforms(
                e.meshGroup
              );
              e.setMaterialsUniform(t);
            });
          else {
            const s = this.meshTrimUniforms.getSharedFloorUniforms(e);
            this.modelMesh.chunks.forEach((e) => {
              `${e.meshGroup}` === t && e.setMaterialsUniform(s);
            });
          }
        }
        async setPreviewPosition(e) {
          const t =
              e.enabled && e.previewCirclePosition
                ? e.previewCirclePosition
                : null,
            s = e.size ? e.size : 0.3;
          for (const e of this.modelMesh.chunks) e.setMeshPreviewSphere(t, s);
        }
        stats() {
          const e = {};
          return (e.textureCount = this.modelTextureLoader.textureCount), e;
        }
        getRenderMode() {
          return this._renderMode;
        }
        setRenderMode(e, t = y.Q9) {
          let s = 1;
          switch (e) {
            case b.k.Hidden:
              (s = 1), (this.modelMesh.visible = !1);
              break;
            case b.k.Mesh:
              (s = 1), (this.modelMesh.visible = !0);
              break;
            case b.k.PanoramaMesh:
              (s = 0), (this.modelMesh.visible = !0);
              break;
            case b.k.PanoramaCube:
              (s = 0), (this.modelMesh.visible = !1);
              break;
            default:
              throw new Error(`unknown mode ${e}!`);
          }
          const i = this.meshData.meshTextureOpacity;
          (i.value === s && i.easing === t) ||
            this.meshData.meshTextureOpacity.modifyAnimation(
              this.meshData.meshTextureOpacity.value,
              s,
              100,
              t
            ),
            (this._renderMode = e);
        }
        setTextureLimits(e, t) {
          this.modelMesh.setTextureQuality(this.modelTextureLoader, e, t);
        }
        setTextureStreamMode(e) {
          switch (e) {
            case S.l.NONE:
              this.modelTextureLoader.autoLoadTiles = !1;
              break;
            case S.l.RAYCAST:
              this.modelTextureLoader.autoLoadTiles = !0;
          }
        }
      }
    },
    51344: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { createModelMesh: () => y });
      var i = s(93331),
        r = s(84561),
        o = s(17915),
        a = s(31102);
      class MeshCreationException extends a.y {
        constructor(e) {
          super(e), (this.name = "MeshCreationException");
        }
      }
      var n = s(2212),
        h = s(21922),
        d = s(38493);
      class FloorMesh extends n.Object3D {
        constructor(e, t = r.o.ALL) {
          super(),
            (this.renderLayer = t),
            (this.roomMeshes = new d.Z((e) => e.meshSubgroup)),
            (this.boundingBox = new n.Box3()),
            (this.size = new n.Vector3()),
            (this.center = new n.Vector3()),
            (this._chunks = []),
            (this.built = !1),
            (this.name = `FloorMesh:${e}`),
            (this.meshGroup = e);
        }
        dispose() {
          this.reset(), this.roomMeshes.clear();
        }
        reset() {
          for (const e of this.roomMeshes) e.dispose(), this.remove(e);
          (this._chunks.length = 0), (this.built = !1);
        }
        addChunk(e) {
          const t = this.getOrCreateRoomMesh(e.meshSubgroup);
          this._chunks.push(e), t.addChunk(e);
        }
        build() {
          if (this.built) throw new Error("build() should only be called once");
          this.boundingBox.makeEmpty();
          for (const e of this.roomMeshes)
            this.add(e), this.boundingBox.union(e.boundingBox);
          (this.center = this.boundingBox.getCenter(this.center)),
            (this.size = this.boundingBox.getSize(this.size)),
            (this.built = !0);
        }
        get chunks() {
          return this._chunks;
        }
        getOrCreateRoomMesh(e) {
          let t = this.roomMeshes.get(e);
          return (
            t ||
              ((t = new h.g(this.meshGroup, e, this.renderLayer)),
              this.roomMeshes.add(t),
              this.add(t)),
            t
          );
        }
      }
      var l = s(62955),
        u = s(6559),
        c = s(88512),
        m = s(3614),
        p = s(19131);
      const f = new c.Z("dam-loader");
      class DamLoader {
        constructor() {
          this.decoder = s(92011).uO;
        }
        async load(e, t, s) {
          f.time("download");
          const i = await t.getFile(e, {
            responseType: "arraybuffer",
            onProgress: s,
          });
          return f.timeEnd("download"), this.parse(i);
        }
        parse(e) {
          f.time("parse proto");
          const t = this.decoder.read(new m(e));
          f.timeEnd("parse proto"), f.time("convert to webgl");
          const s = this.convertProtobufToSceneObject(t);
          return f.timeEnd("convert to webgl"), s;
        }
        convertProtobufToSceneObject(e) {
          if (0 === e.chunk.length)
            return f.warn("No chunks in damfile..."), [];
          const t = new n.Matrix4();
          return (
            t.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1),
            e.chunk.map(function (e) {
              const s = new n.BufferGeometry();
              s.setAttribute(
                "position",
                new n.BufferAttribute(new Float32Array(e.vertices.xyz, 0, 3), 3)
              ),
                e.vertices.uv.length > 0 &&
                  s.setAttribute(
                    "uv",
                    new n.BufferAttribute(
                      new Float32Array(e.vertices.uv, 0, 2),
                      2
                    )
                  ),
                s.setIndex(
                  new n.BufferAttribute(new Uint32Array(e.faces.faces, 0, 1), 1)
                ),
                s.applyMatrix4(t),
                s.computeBoundingBox();
              const { group: i, subgroup: r } = (0, p.xc)(e.chunk_name);
              return new o.z(i, r, s, e.material_name);
            })
          );
        }
      }
      var g = s(17916);
      const M = new c.Z("mesh");
      class ModelMeshDam extends l.e {
        constructor(e, t, s = r.o.ALL) {
          super(),
            (this.renderLayer = s),
            (this.floorMeshes = new d.Z((e) => e.meshGroup)),
            (this.built = !1),
            (this.uuid = e),
            (this.name = `ModelMesh:${e}`),
            (this.signedUrls = t),
            (this.layers.mask = s.mask);
        }
        dispose() {
          this.floorMeshes.mapElements((e) => {
            e.dispose(), this.remove(e);
          }),
            this.floorMeshes.clear(),
            (this._chunks.length = 0),
            (this.built = !1);
        }
        reset() {
          this.floorMeshes.mapElements((e) => {
            e.reset(), this.remove(e);
          }),
            (this._chunks.length = 0),
            (this.built = !1);
        }
        async load(e = {}) {
          const { roomMeshData: t } = e;
          let s = e.chunks
            ? e.chunks
            : await class ModelLoader {
                static async load(e, t, s, i = 0) {
                  const r = new DamLoader(),
                    o = (
                      t.meshUrls
                        ? t.meshUrls
                        : [
                            { suffix: "_50k", extension: "dam" },
                            { suffix: "", extension: "dam" },
                          ]
                    )[i];
                  if (!o)
                    return Promise.reject("No suitable model file found...");
                  const { url: a, suffix: n, extension: h } = o,
                    d = a ? await a.get() : `${e}${n}.${h}`;
                  return r.load(d, t, s).catch(() => this.load(e, t, s, ++i));
                }
              }
                .load(this.uuid, this.signedUrls, e.onProgress)
                .catch((e) => {
                  M.error(e);
                  const t =
                    e instanceof Error
                      ? e.message
                      : "Failed to load model mesh";
                  throw new MeshCreationException(t);
                });
          if (0 === s.length) {
            M.warn(
              "No geometry found for model, loading faux geometry, disabling outside view-mode"
            );
            const e = new n.PlaneBufferGeometry(5, 5, 1, 1);
            e.rotateX(-Math.PI / 2), e.computeBoundingBox();
            const t = new o.z(0, 0, e);
            t.forEachMaterial((e) => (e.visible = !1)), (s = [t]);
          }
          s.forEach((e, t) => {
            this.addChunk(e);
          }),
            this.build(t);
        }
        addChunk(e) {
          const t = this.getOrCreateFloorMesh(e.meshGroup);
          this._chunks.push(e), t.addChunk(e);
        }
        build(e) {
          var t, s;
          if (this.built) throw new Error("build() should only be called once");
          let i = 0,
            r = 0;
          for (const e of this.floorMeshes) {
            this.add(e);
            for (const r of e.roomMeshes)
              r.build(),
                r.geometry.boundsTree ||
                  null === (s = (t = r.geometry).computeBoundsTree) ||
                  void 0 === s ||
                  s.call(t),
                i++;
            e.build(), r++;
          }
          M.debug(
            `FloorMeshes: ${r} RoomMeshes: ${i} Chunks: ${this._chunks.length}`
          ),
            this.boundingBox.makeEmpty();
          for (const e of this.floorMeshes)
            this.boundingBox.union(e.boundingBox);
          (this.size = this.boundingBox.getSize(this.size)),
            (this.center = this.boundingBox.getCenter(this.center)),
            (e.root = this),
            (e.floors = new Set(this.floorMeshes)),
            (e.rooms = this.roomMeshes),
            e.commit(),
            (this.built = !0);
        }
        get roomMeshes() {
          const e = new Set();
          for (const t of this.floorMeshes)
            for (const s of t.roomMeshes) e.add(s);
          return e;
        }
        setSide(e) {
          for (const t of this.floorMeshes)
            for (const s of t.roomMeshes) this.setSideRecursively(s, e);
        }
        async initTextureLoader(e, t) {
          e.setModel(this, this.chunks, t, () => 1 / 0),
            await e.loadAll((0, u.qT)().min(g.V.Standard));
        }
        registerCollision(e) {
          e.registerMesh(this, !0);
          for (const t of this.roomMeshes)
            e.registerSnappingMeshGeometry(t.name, t.geometry);
        }
        setTextureQuality(e, t, s) {
          e.setQuality(t, s);
        }
        onUpdate() {}
        setSideRecursively(e, t) {
          e instanceof n.Mesh &&
            e.material &&
            e.material instanceof n.MeshBasicMaterial &&
            (e.material.side = t);
          for (const s of e.children) this.setSideRecursively(s, t);
        }
        getOrCreateFloorMesh(e) {
          let t = this.floorMeshes.get(e);
          return (
            t ||
              ((t = new FloorMesh(e, this.renderLayer)),
              this.floorMeshes.add(t),
              this.add(t)),
            t
          );
        }
      }
      async function y({
        uuid: e,
        urls: t,
        renderLayer: s,
        engine: r,
        roomMeshData: o,
      }) {
        const a = new ModelMeshDam(e, t, s);
        return (
          await a.load({
            roomMeshData: o,
            onProgress: (e) => {
              r.broadcast(new i.Z(e.loaded, e.total));
            },
          }),
          a
        );
      }
    },
    86980: (e, t, s) => {
      "use strict";
      s.d(t, { e: () => h, d: () => d });
      var i = s(2212);
      const r = s(2388).ZP.sightingMaxAge,
        o = new i.Color();
      let a,
        n = -1;
      const h = (e, t) => {
          a ||
            ((a = new i.InstancedMesh(
              new i.SphereBufferGeometry(0.005, 8, 4),
              new i.MeshBasicMaterial(),
              r
            )),
            l(a));
          const s = new i.Matrix4();
          return ({ point: i, distance: h }) => {
            s.makeScale(h, h, h).setPosition(i),
              a.setMatrixAt(++n % r, s),
              (a.instanceMatrix.needsUpdate = !0);
            for (let t = r; t--; )
              a.setColorAt((n - t + r) % r, o.set(e).multiplyScalar(1 - t / r));
            a.instanceColor && (a.instanceColor.needsUpdate = !0),
              a.parent || t.scene.add(a);
          };
        },
        d = () => {
          var e;
          a && (null === (e = a.parent) || void 0 === e || e.remove(a), l(a));
        };
      function l(e) {
        const t = new i.Matrix4().makeScale(0, 0, 0);
        for (let s = 0; s < r; s++) e.setMatrixAt(s, t);
      }
    },
    19131: (e, t, s) => {
      "use strict";
      s.d(t, { xc: () => r, ko: () => o, k7: () => a });
      var i = s(2212);
      function r(e) {
        const t = e.match(/group([0-9]+)/),
          s = e.match(/sub([0-9]+)/),
          i = e.match(/type([0-9]+)/),
          r = e.match(/mirror([0-9]+)/),
          o = e.match(/window([0-9]+)/),
          a = e.match(/chunk([0-9]+)/),
          n = e.match(/_chunk([0-9]+)/),
          h = i
            ? parseInt(i[1], 10)
            : r && !isNaN(parseInt(r[1], 10))
            ? 100
            : o && !isNaN(parseInt(o[1], 10))
            ? 101
            : 0;
        return {
          group: t ? parseInt(t[1], 10) : 0,
          subgroup: s ? parseInt(s[1], 10) : 0,
          chunkIndex: a ? parseInt(a[1], 10) : 0,
          nodeIndex: n ? parseInt(n[1], 10) : 0,
          type: h,
        };
      }
      function o(e, t = !1) {
        let s = e.getAttribute("barycentric");
        if (s) return s;
        const r = (e.getIndex() || e.getAttribute("position")).count / 3,
          o = [];
        for (let e = 0; e < r; e++) {
          const s = t ? 1 : 0;
          e % 2 == 0
            ? o.push(0, 0, 1, 0, 1, 0, 1, 0, s)
            : o.push(0, 1, 0, 0, 0, 1, 1, 0, s);
        }
        const a = new Float32Array(o);
        return (
          (s = new i.BufferAttribute(a, 3)), e.setAttribute("barycentric", s), s
        );
      }
      function a(e = 16777215 * Math.random(), t = 1) {
        const s = (function (e, t, s, i = 1) {
            const r = document.createElement("canvas");
            (r.width = t), (r.height = s);
            const o = r.getContext("2d");
            return (
              (o.fillStyle = `rgba(${(255 * e.r) | 0},${(255 * e.g) | 0},${
                (255 * e.b) | 0
              }, ${(255 * i) | 0})`),
              o.fillRect(0, 0, t, s),
              r
            );
          })(new i.Color(e), 1, 1, t),
          r = new i.CubeTexture([s, s, s, s, s, s]);
        return (r.format = i.RGBAFormat), (r.needsUpdate = !0), r;
      }
    },
    38330: (e, t, s) => {
      "use strict";
      s.d(t, { MU: () => JsonStoreStore });
      var i,
        r = s(10757),
        o = s(32848);
      !(function (e) {
        (e.GET = "GET"),
          (e.POST = "POST"),
          (e.PATCH = "PATCH"),
          (e.PUT = "PUT"),
          (e.DELETE = "DELETE"),
          (e.OPTIONS = "OPTIONS");
      })(i || (i = {}));
      class ReadOnlyStore extends class Auth {
        constructor() {
          this._options = { responseType: "json" };
        }
        get options() {
          const e = this._options;
          return (
            (e.headers = (0, o.m)(this.url, this._options.headers || {})), e
          );
        }
      } {
        constructor(e) {
          super(), (this.config = e), (this.url = e.path);
        }
        async read() {
          const { deserialize: e } = this.config;
          let t = null;
          return (
            this.config.cachedData && this.config.cachedData.data
              ? (t = this.config.cachedData.data)
              : ((t = await this.config.queue.get(
                  this.config.path,
                  this.options
                )),
                this.config.cachedData && (this.config.cachedData.data = t)),
            e(t)
          );
        }
        clearCache() {
          this.config.cachedData && (this.config.cachedData.data = null);
        }
      }
      class JsonStoreStore extends ReadOnlyStore {
        constructor(e) {
          super(e),
            (this.config = e),
            (this.acceptsPartial = !1),
            (this.config.batchUpdate =
              "batchUpdate" in this.config && this.config.batchUpdate);
        }
        async create(e) {
          throw Error("Not implemented");
        }
        updateBatch(e, t) {
          const { serialize: s } = this.config,
            r = [],
            o = [...new Set([...Object.keys(e), ...Object.keys(t)])];
          for (const s of o) {
            e[s] ||
              t[s] ||
              r.push(
                this.config.queue.delete(
                  `${this.config.path}/${s}`,
                  this.options
                )
              );
          }
          const a = s(e, t),
            n = Object.assign(Object.assign({}, this.options), { body: a });
          return (
            r.push(
              this.config.queue.request(
                this.config.httpMethod || i.POST,
                this.config.path,
                n
              )
            ),
            Promise.all(r)
          );
        }
        updateInternal(e, t) {
          const { serialize: s } = this.config,
            o = [],
            a = Object.assign({}, this.options),
            n = Object.keys(e),
            h = Object.keys(t),
            d = (0, r.XN)(n.concat(h));
          for (const r in d) {
            const n = d[r],
              h = e[n] || t[n];
            if (h) {
              const e = {};
              e[n] = h;
              const r = {},
                d = t[n];
              d && (r[n] = d);
              const l = s(e, r);
              (a.body = l),
                o.push(
                  this.config.queue.request(
                    this.config.httpMethod || i.POST,
                    this.config.path,
                    a
                  )
                );
            } else
              o.push(
                this.config.queue.delete(
                  `${this.config.path}/${n}`,
                  this.options
                )
              );
          }
          return Promise.all(o);
        }
        async update(e, t) {
          this.clearCache(),
            await (this.config.batchUpdate
              ? this.updateBatch(e, t || {})
              : this.updateInternal(e, t || {}));
        }
        async delete(e) {
          throw Error("Not implemented");
        }
      }
    },
    64807: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => PanoRenderTargetResizedMessage });
      var i = s(91466);
      class PanoRenderTargetResizedMessage extends i.v {
        constructor(e, t, s) {
          super(), (this.size = e), (this.sweepId = t), (this.renderTarget = s);
        }
      }
    },
  },
]);
