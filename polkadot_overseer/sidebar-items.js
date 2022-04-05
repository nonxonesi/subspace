initSidebarItems({"attr":[["overlord",""]],"constant":[["KNOWN_LEAVES_CACHE_SIZE","Store 2 days worth of blocks, not accounting for forks, in the LRU cache. Assumes a 6-second block time."]],"enum":[["AllMessages","Generated message type wrapper"],["Event","An event from outside the overseer scope, such as the substrate framework or user interaction."],["ExternalRequest","Some request from outer world."],["FromOverseer","A message type that a subsystem receives from an overseer. It wraps signals from an overseer and messages that are circulating between subsystems."],["LeafStatus","The status of an activated leaf."],["OverseerSignal","Signals sent by an overseer to a subsystem."],["SubsystemError","An error type that describes faults that may happen"],["ToOverseer","A type of messages that are sent from [`Subsystem`] to [`Overseer`]."]],"fn":[["forward_events","Glues together the [`Overseer`] and `BlockchainEvents` by forwarding import and finality notifications into the [`OverseerHandle`]."],["spawn","Spawn task of kind `self` using spawner `S`."],["spawn_metronome_metrics","Spawn the metrics metronome task."]],"mod":[["metrics","Prometheus metrics related to the overseer and its channels."]],"struct":[["ActivatedLeaf","Activated leaf."],["ActiveLeavesUpdate","Changes in the set of active leaves: the parachain heads which we care to work on."],["BlockInfo","An event telling the `Overseer` on the particular block that has been imported or finalized."],["ChannelsOut","Collection of channels to the individual subsystems."],["Handle","A handle used to communicate with the `Overseer`."],["MessagePacket","A wrapping type for messages."],["Metronome","Create a stream of ticks with a defined cycle duration."],["OverseenSubsystem","A subsystem that the overseer oversees."],["Overseer","The overseer."],["OverseerBuilder",""],["OverseerConnector","External connector."],["OverseerSubsystemContext","A context type that is given to the `Subsystem` upon spawning. It can be used by `Subsystem` to communicate with other `Subsystem`s or to spawn it’s `SubsystemJob`s."],["OverseerSubsystemSender","Connector to send messages towards all subsystems, while tracking the which signals where already received."],["SignalsReceived","Watermark to track the received signals."],["SubsystemInstance","A running instance of some `Subsystem`."],["SubsystemMeterReadouts","Set of readouts of the `Meter`s of a subsystem."],["SubsystemMeters","Collection of meters related to a subsystem."]],"trait":[["MapSubsystem","A helper trait to map a subsystem to smth. else."],["MetricsTrait","Subsystem- or job-specific Prometheus metrics."],["SpawnNamed","Something that can spawn tasks (blocking and non-blocking) with an assigned name and optional group."],["Subsystem","A trait that describes the `Subsystem`s that can run on the `Overseer`."],["SubsystemContext","A context type that is given to the [`Subsystem`] upon spawning. It can be used by [`Subsystem`] to communicate with other [`Subsystem`]s or spawn jobs."],["SubsystemSender","Sender end of a channel to interface with a subsystem."],["TaskKind","Task kind to launch."],["TimeoutExt","Extends `Future` to allow time-limited futures."]],"type":[["OverseerHandle","Handle for an overseer."],["SubsystemIncomingMessages","Incoming messages from both the bounded and unbounded channel."],["SubsystemResult","Ease the use of subsystem errors."]]});