#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform samplerCube fp_t_tcb_18;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform samplerCube fp_t_tcb_16;
layout (binding = 5) uniform sampler2D fp_t_tcb_22;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec4 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    bool temp_7;
    precise vec2 temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise vec3 temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise vec3 temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise vec3 temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise vec4 temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise vec3 temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    // 0x000008: 0x4C98079C02070023 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF01 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF04 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD832024140470102 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0x5C98078001570007 Mov
    // 0x000050: 0x4BB1839406070707 Fsetp
    temp_7 = temp_6 < fp_c5.data[24].x;
    // 0x000058: 0xE33000000000000F Kil
    if (temp_7)
    {
        discard;
    }
    // 0x000068: 0xD830026FF0470108 Texs
    temp_8 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    // 0x000070: 0xE043FF8A0007FF06 Ipa
    temp_11 = in_attr2.x;
    // 0x000078: 0xE043FF890007FF0D Ipa
    temp_12 = in_attr1.x;
    // 0x000088: 0xE043FF8A4007FF0A Ipa
    temp_13 = in_attr2.y;
    // 0x000090: 0xE043FF880007FF11 Ipa
    temp_14 = in_attr0.x;
    // 0x000098: 0xE043FF894007FF0E Ipa
    temp_15 = in_attr1.y;
    // 0x0000A8: 0xE043FF8A8007FF0B Ipa
    temp_16 = in_attr2.z;
    // 0x0000B0: 0xE043FF884007FF15 Ipa
    temp_17 = in_attr0.y;
    // 0x0000B8: 0xE043FF898007FF0F Ipa
    temp_18 = in_attr1.z;
    // 0x0000C8: 0xE043FF888007FF16 Ipa
    temp_19 = in_attr0.z;
    // 0x0000D0: 0xE043FF8B0007FF05 Ipa
    temp_20 = in_attr3.x;
    // 0x0000D8: 0xE003FF874FF7FF1C Ipa
    temp_21 = gl_FragCoord.y;
    temp_22 = support_buffer.render_scale[0];
    temp_23 = temp_21 / temp_22;
    // 0x0000E8: 0xE003FF870FF7FF1D Ipa
    temp_24 = gl_FragCoord.x;
    temp_25 = support_buffer.render_scale[0];
    temp_26 = temp_24 / temp_25;
    // 0x0000F0: 0x5C68100000670601 Fmul
    temp_27 = temp_11 * temp_11;
    // 0x0000F8: 0x5C68100000D70D0C Fmul
    temp_28 = temp_12 * temp_12;
    // 0x000108: 0x5C68100001171112 Fmul
    temp_29 = temp_14 * temp_14;
    // 0x000110: 0x59A0008000A70A04 Ffma
    temp_30 = fma(temp_13, temp_13, temp_27);
    // 0x000118: 0xE043FF8B4007FF01 Ipa
    temp_31 = in_attr3.y;
    // 0x000128: 0x59A0060000E70E10 Ffma
    temp_32 = fma(temp_15, temp_15, temp_28);
    // 0x000130: 0x59A0090001571513 Ffma
    temp_33 = fma(temp_17, temp_17, temp_29);
    // 0x000138: 0x5C68100000570518 Fmul
    temp_34 = temp_20 * temp_20;
    // 0x000148: 0x4C68100C04B71C1C Fmul
    temp_35 = temp_23 * fp_c3.data[18].w;
    // 0x000150: 0x59A0020000B70B0C Ffma
    temp_36 = fma(temp_16, temp_16, temp_30);
    // 0x000158: 0xE043FF8B8007FF04 Ipa
    temp_37 = in_attr3.z;
    // 0x000168: 0x59A0080000F70F10 Ffma
    temp_38 = fma(temp_18, temp_18, temp_32);
    // 0x000170: 0x5080000000570C0C Mufu
    temp_39 = inversesqrt(temp_36);
    // 0x000178: 0x59A0098001671617 Ffma
    temp_40 = fma(temp_19, temp_19, temp_33);
    // 0x000188: 0x5080000000571010 Mufu
    temp_41 = inversesqrt(temp_38);
    // 0x000190: 0x4C68100C04A71D1D Fmul
    temp_42 = temp_26 * fp_c3.data[18].z;
    // 0x000198: 0x5080000000571717 Mufu
    temp_43 = inversesqrt(temp_40);
    // 0x0001A8: 0x5C68100000C70612 Fmul
    temp_44 = temp_11 * temp_39;
    // 0x0001B0: 0x5C68100000C70B13 Fmul
    temp_45 = temp_16 * temp_39;
    // 0x0001B8: 0x5C68100001070F06 Fmul
    temp_46 = temp_18 * temp_41;
    // 0x0001C8: 0x5C68100000C70A0A Fmul
    temp_47 = temp_13 * temp_39;
    // 0x0001D0: 0x5C6810000177160B Fmul
    temp_48 = temp_19 * temp_43;
    // 0x0001D8: 0x5C68100001070D0D Fmul
    temp_49 = temp_12 * temp_41;
    // 0x0001E8: 0x5C68100001070E0E Fmul
    temp_50 = temp_15 * temp_41;
    // 0x0001F0: 0x5C68100001771111 Fmul
    temp_51 = temp_14 * temp_43;
    // 0x0001F8: 0x5C68100001771515 Fmul
    temp_52 = temp_17 * temp_43;
    // 0x000208: 0x59A00C0000170116 Ffma
    temp_53 = fma(temp_31, temp_31, temp_34);
    // 0x000210: 0x59A00B0000470416 Ffma
    temp_54 = fma(temp_37, temp_37, temp_53);
    // 0x000218: 0x5080000000571616 Mufu
    temp_55 = inversesqrt(temp_54);
    // 0x000228: 0x5C69100001670404 Fmul
    temp_56 = 0.0 - temp_55;
    temp_57 = temp_37 * temp_56;
    // 0x000230: 0x5C6810000097090F Fmul
    temp_58 = temp_10 * temp_10;
    // 0x000238: 0x5C68100000971212 Fmul
    temp_59 = temp_44 * temp_10;
    // 0x000248: 0x5C68100000971313 Fmul
    temp_60 = temp_45 * temp_10;
    // 0x000250: 0x59A007800087080F Ffma
    temp_61 = fma(temp_9, temp_9, temp_58);
    // 0x000258: 0x59A0090000870D12 Ffma
    temp_62 = fma(temp_49, temp_9, temp_59);
    // 0x000268: 0x5C6910000167050D Fmul
    temp_63 = 0.0 - temp_55;
    temp_64 = temp_20 * temp_63;
    // 0x000270: 0x59A0098000870606 Ffma
    temp_65 = fma(temp_46, temp_9, temp_60);
    // 0x000278: 0x385D103F80070F0C Fadd
    temp_66 = 0.0 - temp_61;
    temp_67 = temp_66 + 1.0;
    temp_68 = clamp(temp_67, 0.0, 1.0);
    // 0x000288: 0x5C68100000970A0F Fmul
    temp_69 = temp_47 * temp_10;
    // 0x000290: 0x5080000000870C0C Mufu
    temp_70 = sqrt(temp_68);
    // 0x000298: 0x5C6910000167010A Fmul
    temp_71 = 0.0 - temp_55;
    temp_72 = temp_31 * temp_71;
    // 0x0002A8: 0x4C58301805C70D1E Fadd
    temp_73 = 0.0 - fp_c6.data[23].x;
    temp_74 = temp_64 + temp_73;
    // 0x0002B0: 0x59A0078000870E0E Ffma
    temp_75 = fma(temp_50, temp_9, temp_69);
    // 0x0002B8: 0x4C58301805D70A05 Fadd
    temp_76 = 0.0 - fp_c6.data[23].y;
    temp_77 = temp_72 + temp_76;
    // 0x0002C8: 0x5C68100001E71E08 Fmul
    temp_78 = temp_74 * temp_74;
    // 0x0002D0: 0x59A0090000C71111 Ffma
    temp_79 = fma(temp_51, temp_70, temp_62);
    // 0x0002D8: 0x59A0070000C7150E Ffma
    temp_80 = fma(temp_52, temp_70, temp_75);
    // 0x0002E8: 0x59A0030000C70B06 Ffma
    temp_81 = fma(temp_48, temp_70, temp_65);
    // 0x0002F0: 0x4C58301805E7040B Fadd
    temp_82 = 0.0 - fp_c6.data[23].z;
    temp_83 = temp_57 + temp_82;
    // 0x0002F8: 0x59A0040000570508 Ffma
    temp_84 = fma(temp_77, temp_77, temp_78);
    // 0x000308: 0x5C68100001171101 Fmul
    temp_85 = temp_79 * temp_79;
    // 0x000310: 0x59A0040000B70B0C Ffma
    temp_86 = fma(temp_83, temp_83, temp_84);
    // 0x000318: 0x59A0008000E70E01 Ffma
    temp_87 = fma(temp_80, temp_80, temp_85);
    // 0x000328: 0x5080000000570C0C Mufu
    temp_88 = inversesqrt(temp_86);
    // 0x000330: 0x59A0008000670601 Ffma
    temp_89 = fma(temp_81, temp_81, temp_87);
    // 0x000338: 0x5080000000570108 Mufu
    temp_90 = inversesqrt(temp_89);
    // 0x000348: 0x5C68100000C71E1E Fmul
    temp_91 = temp_74 * temp_88;
    // 0x000350: 0x5C68100000C70505 Fmul
    temp_92 = temp_77 * temp_88;
    // 0x000358: 0x5C68100000C70B0B Fmul
    temp_93 = temp_83 * temp_88;
    // 0x000368: 0x5C68100001E70D0C Fmul
    temp_94 = temp_64 * temp_91;
    // 0x000370: 0x5C68100000871124 Fmul
    temp_95 = temp_79 * temp_90;
    // 0x000378: 0x5C68100000870E1F Fmul
    temp_96 = temp_80 * temp_90;
    // 0x000388: 0x5C68100000870606 Fmul
    temp_97 = temp_81 * temp_90;
    // 0x000390: 0x59A0060000570A01 Ffma
    temp_98 = fma(temp_72, temp_92, temp_94);
    // 0x000398: 0x5C68100000D72409 Fmul
    temp_99 = temp_95 * temp_64;
    // 0x0003A8: 0x5C62578001F72410 Fmnmx
    temp_100 = abs(temp_95);
    temp_101 = abs(temp_96);
    temp_102 = max(temp_100, temp_101);
    // 0x0003B0: 0x4C68100C0067060C Fmul
    temp_103 = temp_97 * fp_c3.data[1].z;
    // 0x0003B8: 0x59A0048000A71F09 Ffma
    temp_104 = fma(temp_96, temp_72, temp_99);
    // 0x0003C8: 0x5C60578001070610 Fmnmx
    temp_105 = abs(temp_97);
    temp_106 = max(temp_105, temp_102);
    // 0x0003D0: 0x49A0060C00571F11 Ffma
    temp_107 = fma(temp_96, fp_c3.data[1].y, temp_103);
    // 0x0003D8: 0x5080000000471019 Mufu
    temp_108 = 1.0 / temp_106;
    // 0x0003E8: 0x010000000017F00C Mov32i
    // 0x0003F0: 0x59A4048000470615 Ffma
    temp_109 = fma(temp_97, temp_57, temp_104);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x0003F8: 0x49A0088C00472411 Ffma
    temp_111 = fma(temp_95, fp_c3.data[1].x, temp_107);
    // 0x000408: 0x5C68100001572408 Fmul
    temp_112 = temp_95 * temp_110;
    // 0x000410: 0x5C68100001571F09 Fmul
    temp_113 = temp_96 * temp_110;
    // 0x000418: 0x4C69100C03E71111 Fmul
    temp_114 = 0.0 - fp_c3.data[15].z;
    temp_115 = temp_111 * temp_114;
    // 0x000428: 0x5C68100001972416 Fmul
    temp_116 = temp_95 * temp_108;
    // 0x000430: 0x5C68100001971F17 Fmul
    temp_117 = temp_96 * temp_108;
    // 0x000438: 0x32A206C000070808 Ffma
    temp_118 = 0.0 - temp_64;
    temp_119 = fma(temp_112, 2.0, temp_118);
    // 0x000448: 0x5C6810000157060D Fmul
    temp_120 = temp_97 * temp_110;
    // 0x000450: 0x32A2054000070909 Ffma
    temp_121 = 0.0 - temp_72;
    temp_122 = fma(temp_113, 2.0, temp_121);
    // 0x000458: 0x5C69100001970620 Fmul
    temp_123 = 0.0 - temp_108;
    temp_124 = temp_97 * temp_123;
    // 0x000468: 0x5C98078001670010 Mov
    // 0x000470: 0x32A2024000070D0F Ffma
    temp_125 = 0.0 - temp_57;
    temp_126 = fma(temp_120, 2.0, temp_125);
    // 0x000478: 0x4C9807940627000D Mov
    // 0x000488: 0x5C6257800097080A Fmnmx
    temp_127 = abs(temp_119);
    temp_128 = abs(temp_122);
    temp_129 = max(temp_127, temp_128);
    // 0x000490: 0x4C6810180A070D0D Fmul
    temp_130 = fp_c5.data[24].z * fp_c6.data[40].x;
    // 0x000498: 0x5C60578000A70F0E Fmnmx
    temp_131 = abs(temp_126);
    temp_132 = max(temp_131, temp_129);
    // 0x0004A8: 0x4C68100C0027060A Fmul
    temp_133 = temp_97 * fp_c3.data[0].z;
    // 0x0004B0: 0x5080000000470E12 Mufu
    temp_134 = 1.0 / temp_132;
    // 0x0004B8: 0x386013BF80070D13 Fmnmx
    temp_135 = min(temp_130, 1.0);
    // 0x0004C8: 0x49A0050C00171F0A Ffma
    temp_136 = fma(temp_96, fp_c3.data[0].y, temp_133);
    // 0x0004D0: 0x4C60178400071313 Fmnmx
    temp_137 = max(temp_135, fp_c1.data[0].x);
    // 0x0004D8: 0x49A0050C0007240A Ffma
    temp_138 = fma(temp_95, fp_c3.data[0].x, temp_136);
    // 0x0004E8: 0x5C6810000127080D Fmul
    temp_139 = temp_119 * temp_134;
    // 0x0004F0: 0xE043FF900007FF08 Ipa
    temp_140 = in_attr8.x;
    // 0x0004F8: 0x5C6810000127090E Fmul
    temp_141 = temp_122 * temp_134;
    // 0x000508: 0xE043FF904007FF09 Ipa
    temp_142 = in_attr8.y;
    // 0x000510: 0x5C69100001270F0F Fmul
    temp_143 = 0.0 - temp_134;
    temp_144 = temp_126 * temp_143;
    // 0x000518: 0x4C68101808B71112 Fmul
    temp_145 = temp_115 * fp_c6.data[34].w;
    // 0x000528: 0x3868104080071321 Fmul
    temp_146 = temp_137 * 4.0;
    // 0x000530: 0x38681040E0071326 Fmul
    temp_147 = temp_137 * 7.0;
    // 0x000538: 0x5C98078001770011 Mov
    // 0x000548: 0xD9A2018212071616 Texs
    temp_148 = textureLod(fp_t_tcb_18, vec3(temp_116, temp_117, temp_124), temp_146).xyz;
    temp_149 = temp_148.x;
    temp_150 = temp_148.y;
    temp_151 = temp_148.z;
    // 0x000550: 0xC1BA0143F2670C0C Tex
    temp_152 = textureLod(fp_t_tcb_14, vec4(temp_139, temp_141, temp_144, float(1)), temp_147).xyz;
    temp_153 = temp_152.x;
    temp_154 = temp_152.y;
    temp_155 = temp_152.z;
    // 0x000558: 0x4C68101808B70A0A Fmul
    temp_156 = temp_138 * fp_c6.data[34].w;
    // 0x000568: 0x49A00E0400371218 Ffma
    temp_157 = fma(temp_145, fp_c1.data[0].w, temp_35);
    // 0x000570: 0x5C98078002070012 Mov
    // 0x000578: 0xC0BA0163EFF71010 Tex
    temp_158 = textureLod(fp_t_tcb_16, vec3(temp_116, temp_117, temp_124), 0.0).xyz;
    temp_159 = temp_158.x;
    temp_160 = temp_158.y;
    temp_161 = temp_158.z;
    // 0x000588: 0x49A00E8400370A19 Ffma
    temp_162 = fma(temp_156, fp_c1.data[0].w, temp_42);
    // 0x000590: 0xE043FF908007FF0A Ipa
    temp_163 = in_attr8.z;
    // 0x000598: 0xD8320221A1871918 Texs
    temp_164 = texture(fp_t_tcb_22, vec2(temp_162, temp_157)).xyzw;
    temp_165 = temp_164.x;
    temp_166 = temp_164.y;
    temp_167 = temp_164.z;
    temp_168 = temp_164.w;
    // 0x0005A8: 0xDEBA0000C2370808 TexB
    temp_169 = texture(fp_t_cb7_20, vec3(temp_140, temp_142, temp_163)).x;
    // 0x0005B0: 0xD822020221C71D1C Texs
    temp_170 = texture(fp_t_tcb_20, vec2(temp_42, temp_35)).xyz;
    temp_171 = temp_170.x;
    temp_172 = temp_170.y;
    temp_173 = temp_170.z;
    // 0x0005B8: 0x59A4008000B70425 Ffma
    temp_174 = fma(temp_57, temp_93, temp_98);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x0005C8: 0x4C69101805C71E04 Fmul
    temp_176 = 0.0 - fp_c6.data[23].x;
    temp_177 = temp_91 * temp_176;
    // 0x0005D0: 0x5C68100001E7241E Fmul
    temp_178 = temp_95 * temp_91;
    // 0x0005D8: 0x51A4098400071301 Ffma
    temp_179 = fma(temp_137, temp_137, fp_c1.data[0].x);
    temp_180 = clamp(temp_179, 0.0, 1.0);
    // 0x0005E8: 0x4C69101805C72424 Fmul
    temp_181 = 0.0 - fp_c6.data[23].x;
    temp_182 = temp_95 * temp_181;
    // 0x0005F0: 0x49A1021805D70504 Ffma
    temp_183 = 0.0 - fp_c6.data[23].y;
    temp_184 = fma(temp_92, temp_183, temp_177);
    // 0x0005F8: 0x59A00F0000571F05 Ffma
    temp_185 = fma(temp_96, temp_92, temp_178);
    // 0x000608: 0x0103F0000007F01E Mov32i
    // 0x000610: 0x5C6810000017010F Fmul
    temp_186 = temp_180 * temp_180;
    // 0x000618: 0x49A1121805D71F24 Ffma
    temp_187 = 0.0 - fp_c6.data[23].y;
    temp_188 = fma(temp_96, temp_187, temp_182);
    // 0x000628: 0x59A4028000B70605 Ffma
    temp_189 = fma(temp_97, temp_93, temp_185);
    temp_190 = clamp(temp_189, 0.0, 1.0);
    // 0x000630: 0x32A00F3F0007130A Ffma
    temp_191 = fma(temp_137, 0.5, 0.5);
    // 0x000638: 0x3859103F80071309 Fadd
    temp_192 = 0.0 - temp_137;
    temp_193 = temp_192 + 1.0;
    // 0x000648: 0x49A5121805E70613 Ffma
    temp_194 = 0.0 - fp_c6.data[23].z;
    temp_195 = fma(temp_97, temp_194, temp_188);
    temp_196 = clamp(temp_195, 0.0, 1.0);
    // 0x000650: 0x49A5021805E70B0B Ffma
    temp_197 = 0.0 - fp_c6.data[23].z;
    temp_198 = fma(temp_93, temp_197, temp_184);
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x000658: 0x0103E2CD9E87F023 Mov32i
    // 0x000668: 0x59A2028000F7050F Ffma
    temp_200 = 0.0 - temp_190;
    temp_201 = fma(temp_190, temp_186, temp_200);
    // 0x000670: 0x5C68120000A70A0A Fmul
    temp_202 = temp_191 * 0.5;
    temp_203 = temp_202 * temp_191;
    // 0x000678: 0x5C68100000970909 Fmul
    temp_204 = temp_193 * temp_193;
    // 0x000688: 0x01040DF760C7F024 Mov32i
    // 0x000690: 0x51A0078400170506 Ffma
    temp_205 = fma(temp_190, temp_201, fp_c1.data[0].y);
    // 0x000698: 0x59A10A8000A71505 Ffma
    temp_206 = 0.0 - temp_203;
    temp_207 = fma(temp_110, temp_206, temp_110);
    // 0x0006A8: 0x5080000000470606 Mufu
    temp_208 = 1.0 / temp_205;
    // 0x0006B0: 0x59A1098000A71304 Ffma
    temp_209 = 0.0 - temp_203;
    temp_210 = fma(temp_196, temp_209, temp_196);
    // 0x0006B8: 0x5C68100000970909 Fmul
    temp_211 = temp_204 * temp_204;
    // 0x0006C8: 0x1E23E468DB97150F Fmul32i
    temp_212 = temp_110 * 0.193900004;
    // 0x0006D0: 0x5C58100000570A20 Fadd
    temp_213 = temp_203 + temp_207;
    // 0x0006D8: 0x5C58100000470A04 Fadd
    temp_214 = temp_203 + temp_210;
    // 0x0006E8: 0x5080000000472020 Mufu
    temp_215 = 1.0 / temp_213;
    // 0x0006F0: 0x0104066978D7F00A Mov32i
    // 0x0006F8: 0x5080000000470405 Mufu
    temp_216 = 1.0 / temp_214;
    // 0x000708: 0x49A007840067090F Ffma
    temp_217 = fma(temp_211, fp_c1.data[1].z, temp_212);
    // 0x000710: 0x49A2118400B70923 Ffma
    temp_218 = fma(temp_211, fp_c1.data[2].w, -0.168799996);
    // 0x000718: 0x5C68100000670106 Fmul
    temp_219 = temp_180 * temp_208;
    // 0x000728: 0x0103F0000007F001 Mov32i
    // 0x000730: 0x49A205040077090A Ffma
    temp_220 = fma(temp_211, fp_c1.data[1].w, -3.60299993);
    // 0x000738: 0x088BF05D63970F0F Fadd32i
    temp_221 = temp_217 + -0.522800028;
    // 0x000748: 0x4C98079800870004 Mov
    // 0x000750: 0x5C68100000670606 Fmul
    temp_222 = temp_219 * temp_219;
    // 0x000758: 0x32A000BF00071F01 Ffma
    temp_223 = fma(temp_96, 0.5, 0.5);
    // 0x000768: 0x010410676C97F01F Mov32i
    // 0x000770: 0x51A005040087091E Ffma
    temp_224 = fma(temp_211, temp_220, fp_c1.data[2].x);
    // 0x000778: 0x5C68100000F7150F Fmul
    temp_225 = temp_110 * temp_221;
    // 0x000788: 0x5C6810000237090A Fmul
    temp_226 = temp_211 * temp_218;
    // 0x000790: 0x4C59101800470404 Fadd
    temp_227 = 0.0 - fp_c6.data[2].x;
    temp_228 = temp_227 + fp_c6.data[1].x;
    // 0x000798: 0x5C68120000572020 Fmul
    temp_229 = temp_215 * 0.5;
    temp_230 = temp_229 * temp_216;
    // 0x0007A8: 0x59A0078001E70909 Ffma
    temp_231 = fma(temp_211, temp_224, temp_225);
    // 0x0007B0: 0x4C9807980097000F Mov
    // 0x0007B8: 0x4C98079800A7001E Mov
    // 0x0007C8: 0x51A0021800870105 Ffma
    temp_232 = fma(temp_223, temp_228, fp_c6.data[2].x);
    // 0x0007D0: 0x5C68100002070620 Fmul
    temp_233 = temp_222 * temp_230;
    // 0x0007D8: 0x4C5C100400A70906 Fadd
    temp_234 = temp_231 + fp_c1.data[2].z;
    temp_235 = clamp(temp_234, 0.0, 1.0);
    // 0x0007E8: 0x4C59101800570F0F Fadd
    temp_236 = 0.0 - fp_c6.data[2].y;
    temp_237 = temp_236 + fp_c6.data[1].y;
    // 0x0007F0: 0x4C59101800671E1E Fadd
    temp_238 = 0.0 - fp_c6.data[2].z;
    temp_239 = temp_238 + fp_c6.data[1].z;
    // 0x0007F8: 0x51A0079800970104 Ffma
    temp_240 = fma(temp_223, temp_237, fp_c6.data[2].y);
    // 0x000808: 0x51A00F1800A70101 Ffma
    temp_241 = fma(temp_223, temp_239, fp_c6.data[2].z);
    // 0x000810: 0x49A00F840047150F Ffma
    temp_242 = fma(temp_110, fp_c1.data[1].x, 8.40400028);
    // 0x000818: 0x49A2120400270B1E Ffma
    temp_243 = fma(temp_199, fp_c1.data[0].z, -6.98316002);
    // 0x000828: 0x4C98079407B7001F Mov
    // 0x000830: 0x51A007840057150F Ffma
    temp_244 = fma(temp_110, temp_242, fp_c1.data[1].y);
    // 0x000838: 0x5C68100001E70B1E Fmul
    temp_245 = temp_199 * temp_243;
    // 0x000848: 0x49A212040027250B Ffma
    temp_246 = fma(temp_175, fp_c1.data[0].z, -6.98316002);
    // 0x000850: 0x386C104248071F1F Fmul
    temp_247 = fp_c5.data[30].w * 50.0;
    temp_248 = clamp(temp_247, 0.0, 1.0);
    // 0x000858: 0x51A007840097150F Ffma
    temp_249 = fma(temp_110, temp_244, fp_c1.data[2].y);
    // 0x000868: 0x3859103F80071515 Fadd
    temp_250 = 0.0 - temp_110;
    temp_251 = temp_250 + 1.0;
    // 0x000870: 0x5C68100000B72525 Fmul
    temp_252 = temp_175 * temp_246;
    // 0x000878: 0x508000000037150B Mufu
    temp_253 = log2(temp_251);
    // 0x000888: 0x5C60138000A70F0A Fmnmx
    temp_254 = min(temp_249, temp_226);
    // 0x000890: 0x5C90008002570025 Rro
    // 0x000898: 0x5C5C30000FF70A24 Fadd
    temp_255 = temp_254 + -0.0;
    temp_256 = clamp(temp_255, 0.0, 1.0);
    // 0x0008A8: 0x4C68101808970B0F Fmul
    temp_257 = temp_253 * fp_c6.data[34].y;
    // 0x0008B0: 0x4C6810180907150B Fmul
    temp_258 = temp_251 * fp_c6.data[36].x;
    // 0x0008B8: 0x4C98079808670015 Mov
    // 0x0008C8: 0x5080400000370B0B Mufu
    temp_259 = abs(temp_258);
    temp_260 = log2(temp_259);
    // 0x0008D0: 0x5C68100002471F09 Fmul
    temp_261 = temp_248 * temp_256;
    // 0x0008D8: 0x5C58300002470606 Fadd
    temp_262 = 0.0 - temp_256;
    temp_263 = temp_235 + temp_262;
    // 0x0008E8: 0x5C90008000F70023 Rro
    // 0x0008F0: 0x508400000027230F Mufu
    temp_264 = exp2(temp_257);
    temp_265 = clamp(temp_264, 0.0, 1.0);
    // 0x0008F8: 0x49A0049407B70609 Ffma
    temp_266 = fma(temp_263, fp_c5.data[30].w, temp_261);
    // 0x000908: 0x4C68101809170B0A Fmul
    temp_267 = temp_260 * fp_c6.data[36].y;
    // 0x000910: 0x5C90008001E70023 Rro
    // 0x000918: 0x4C68101808870F0F Fmul
    temp_268 = temp_265 * fp_c6.data[34].x;
    // 0x000928: 0x5C90008000A70024 Rro
    // 0x000930: 0x4C9807980967000A Mov
    // 0x000938: 0x51A00A9808670F0B Ffma
    temp_269 = fma(temp_268, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x000948: 0x5084000000272415 Mufu
    temp_270 = exp2(temp_267);
    temp_271 = clamp(temp_270, 0.0, 1.0);
    // 0x000950: 0x4C58101408170A0A Fadd
    temp_272 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x000958: 0x508000000027250F Mufu
    temp_273 = exp2(temp_252);
    // 0x000968: 0x5C68100000A71515 Fmul
    temp_274 = temp_271 * temp_272;
    // 0x000970: 0x4C6810180147130A Fmul
    temp_275 = temp_196 * fp_c6.data[5].x;
    // 0x000978: 0x49A1079407B70F1F Ffma
    temp_276 = 0.0 - fp_c5.data[30].w;
    temp_277 = fma(temp_273, temp_276, temp_273);
    // 0x000988: 0x1E23EA2F98370A06 Fmul32i
    temp_278 = temp_275 * 0.318309873;
    // 0x000990: 0x4C58101407B71F1F Fadd
    temp_279 = temp_277 + fp_c5.data[30].w;
    // 0x000998: 0x4C68101808C7150A Fmul
    temp_280 = temp_274 * fp_c6.data[35].x;
    // 0x0009A8: 0x59A1030000671F06 Ffma
    temp_281 = 0.0 - temp_278;
    temp_282 = fma(temp_279, temp_281, temp_278);
    // 0x0009B0: 0x49A1051408270A0F Ffma
    temp_283 = 0.0 - fp_c5.data[32].z;
    temp_284 = fma(temp_280, temp_283, temp_280);
    // 0x0009B8: 0x5C58100000F70606 Fadd
    temp_285 = temp_282 + temp_284;
    // 0x0009C8: 0x5C6810000207130F Fmul
    temp_286 = temp_196 * temp_233;
    // 0x0009D0: 0x4C68101801571320 Fmul
    temp_287 = temp_196 * fp_c6.data[5].y;
    // 0x0009D8: 0x4C68101801671313 Fmul
    temp_288 = temp_196 * fp_c6.data[5].z;
    // 0x0009E8: 0x1E23EA2F98372024 Fmul32i
    temp_289 = temp_287 * 0.318309873;
    // 0x0009F0: 0x5080000000272320 Mufu
    temp_290 = exp2(temp_245);
    // 0x0009F8: 0x1E23EA2F98371325 Fmul32i
    temp_291 = temp_288 * 0.318309873;
    // 0x000A08: 0x59A1120002471F13 Ffma
    temp_292 = 0.0 - temp_289;
    temp_293 = fma(temp_279, temp_292, temp_289);
    // 0x000A10: 0x59A1128002571F1E Ffma
    temp_294 = 0.0 - temp_291;
    temp_295 = fma(temp_279, temp_294, temp_291);
    // 0x000A18: 0x4C98079808A7001F Mov
    // 0x000A28: 0x49A1101407B72020 Ffma
    temp_296 = 0.0 - fp_c5.data[30].w;
    temp_297 = fma(temp_290, temp_296, temp_290);
    // 0x000A30: 0x4C68101808771F1F Fmul
    temp_298 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000A38: 0xF0F0000034170000 Depbar
    // 0x000A48: 0x49A00B9808570D17 Ffma
    temp_299 = fma(temp_154, fp_c6.data[33].y, temp_150);
    // 0x000A50: 0x4C68101808E7150D Fmul
    temp_300 = temp_274 * fp_c6.data[35].z;
    // 0x000A58: 0x49A00B1808570C16 Ffma
    temp_301 = fma(temp_153, fp_c6.data[33].y, temp_149);
    // 0x000A68: 0x4C68101808D7150C Fmul
    temp_302 = temp_274 * fp_c6.data[35].y;
    // 0x000A70: 0x49A0109808570E0E Ffma
    temp_303 = fma(temp_155, fp_c6.data[33].y, temp_151);
    // 0x000A78: 0x49A0080400D70515 Ffma
    temp_304 = fma(temp_232, fp_c1.data[3].y, temp_159);
    // 0x000A88: 0x4C58101407B72021 Fadd
    temp_305 = temp_297 + fp_c5.data[30].w;
    // 0x000A90: 0x49A1069408270D05 Ffma
    temp_306 = 0.0 - fp_c5.data[32].z;
    temp_307 = fma(temp_300, temp_306, temp_300);
    // 0x000A98: 0x49A0090400D70101 Ffma
    temp_308 = fma(temp_241, fp_c1.data[3].y, temp_161);
    // 0x000AA8: 0x51A00F9801471810 Ffma
    temp_309 = fma(temp_165, temp_298, fp_c6.data[5].x);
    // 0x000AB0: 0x51A00F9801571920 Ffma
    temp_310 = fma(temp_166, temp_298, fp_c6.data[5].y);
    // 0x000AB8: 0x51A00F9801671A1F Ffma
    temp_311 = fma(temp_167, temp_298, fp_c6.data[5].z);
    // 0x000AC8: 0x49A0088400D70404 Ffma
    temp_312 = fma(temp_240, fp_c1.data[3].y, temp_160);
    // 0x000AD0: 0x5C58100000571E1E Fadd
    temp_313 = temp_295 + temp_307;
    // 0x000AD8: 0xE04BFF8F4007FF05 Ipa
    temp_314 = in_attr7.y;
    temp_315 = clamp(temp_314, 0.0, 1.0);
    // 0x000AE8: 0x4C68101408270A12 Fmul
    temp_316 = temp_280 * fp_c5.data[32].z;
    // 0x000AF0: 0xE043FF8F0007FF0A Ipa
    temp_317 = in_attr7.x;
    // 0x000AF8: 0x5C68100001072110 Fmul
    temp_318 = temp_305 * temp_309;
    // 0x000B08: 0x5C68100002072120 Fmul
    temp_319 = temp_305 * temp_310;
    // 0x000B10: 0x5C68100001F72121 Fmul
    temp_320 = temp_305 * temp_311;
    // 0x000B18: 0x010404000007F01F Mov32i
    // 0x000B28: 0x4C68101808771B1B Fmul
    temp_321 = temp_168 * fp_c6.data[33].w;
    // 0x000B30: 0x59A20A8000B71818 Ffma
    temp_322 = 0.0 - temp_304;
    temp_323 = fma(temp_165, temp_269, temp_322);
    // 0x000B38: 0x5C68100001070F11 Fmul
    temp_324 = temp_286 * temp_318;
    // 0x000B48: 0x5C68100002070F10 Fmul
    temp_325 = temp_286 * temp_319;
    // 0x000B50: 0x5C68100002170F0F Fmul
    temp_326 = temp_286 * temp_320;
    // 0x000B58: 0x4C68101408270D0D Fmul
    temp_327 = temp_300 * fp_c5.data[32].z;
    // 0x000B68: 0x59A2020000B71919 Ffma
    temp_328 = 0.0 - temp_312;
    temp_329 = fma(temp_166, temp_269, temp_328);
    // 0x000B70: 0x59A2008000B71A1A Ffma
    temp_330 = 0.0 - temp_308;
    temp_331 = fma(temp_167, temp_269, temp_330);
    // 0x000B78: 0x59A00A8001B71818 Ffma
    temp_332 = fma(temp_323, temp_321, temp_304);
    // 0x000B88: 0x49A0090400C7110B Ffma
    temp_333 = fma(temp_324, fp_c1.data[3].x, temp_316);
    // 0x000B90: 0x49A1061408270C24 Ffma
    temp_334 = 0.0 - fp_c5.data[32].z;
    temp_335 = fma(temp_302, temp_334, temp_302);
    // 0x000B98: 0x49A0068400C70F0F Ffma
    temp_336 = fma(temp_326, fp_c1.data[3].x, temp_327);
    // 0x000BA8: 0x59A0020001B71919 Ffma
    temp_337 = fma(temp_329, temp_321, temp_312);
    // 0x000BB0: 0x59A0008001B71A01 Ffma
    temp_338 = fma(temp_331, temp_321, temp_308);
    // 0x000BB8: 0x5C58100000671818 Fadd
    temp_339 = temp_332 + temp_285;
    // 0x000BC8: 0x59A005800167090B Ffma
    temp_340 = fma(temp_266, temp_301, temp_333);
    // 0x000BD0: 0x5C58100002471313 Fadd
    temp_341 = temp_293 + temp_335;
    // 0x000BD8: 0x59A0078000E7090E Ffma
    temp_342 = fma(temp_266, temp_303, temp_336);
    // 0x000BE8: 0x4C9807980B47000F Mov
    // 0x000BF0: 0x5C58100001E70101 Fadd
    temp_343 = temp_338 + temp_313;
    // 0x000BF8: 0x4C98079802870006 Mov
    // 0x000C08: 0x59A005800187020B Ffma
    temp_344 = fma(temp_3, temp_339, temp_340);
    // 0x000C10: 0x5C58100001371919 Fadd
    temp_345 = temp_337 + temp_341;
    // 0x000C18: 0x385C103F80070202 Fadd
    temp_346 = temp_3 + 1.0;
    temp_347 = clamp(temp_346, 0.0, 1.0);
    // 0x000C28: 0x33A00FC00007051F Ffma
    temp_348 = fma(temp_315, -2.0, 3.0);
    // 0x000C30: 0x5C68100000570505 Fmul
    temp_349 = temp_315 * temp_315;
    // 0x000C38: 0x51A207980B471C1C Ffma
    temp_350 = 0.0 - fp_c6.data[45].x;
    temp_351 = fma(temp_171, fp_c6.data[45].x, temp_350);
    // 0x000C48: 0x59A007000017140E Ffma
    temp_352 = fma(temp_5, temp_343, temp_342);
    // 0x000C50: 0x385C103F80070304 Fadd
    temp_353 = temp_4 + 1.0;
    temp_354 = clamp(temp_353, 0.0, 1.0);
    // 0x000C58: 0x5C68100000B70201 Fmul
    temp_355 = temp_347 * temp_344;
    // 0x000C68: 0x51A207980B472222 Ffma
    temp_356 = 0.0 - fp_c6.data[45].x;
    temp_357 = fma(temp_173, fp_c6.data[45].x, temp_356);
    // 0x000C70: 0x5C68100001F70505 Fmul
    temp_358 = temp_349 * temp_348;
    // 0x000C78: 0x4C68101408270C1F Fmul
    temp_359 = temp_302 * fp_c5.data[32].z;
    // 0x000C88: 0xE043FF8C8007FF0C Ipa
    temp_360 = in_attr4.z;
    // 0x000C90: 0x51A0031802871C1C Ffma
    temp_361 = fma(temp_351, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000C98: 0x49A505180BC7080A Ffma
    temp_362 = 0.0 - fp_c6.data[47].x;
    temp_363 = fma(temp_169, temp_362, temp_317);
    temp_364 = clamp(temp_363, 0.0, 1.0);
    // 0x000CA8: 0x51A207980B471D1D Ffma
    temp_365 = 0.0 - fp_c6.data[45].x;
    temp_366 = fma(temp_172, fp_c6.data[45].x, temp_365);
    // 0x000CB0: 0x5080000000370A0A Mufu
    temp_367 = log2(temp_364);
    // 0x000CB8: 0x4C9807980297000B Mov
    // 0x000CC8: 0x49A00F8400C71010 Ffma
    temp_368 = fma(temp_325, fp_c1.data[3].x, temp_359);
    // 0x000CD0: 0x5C58300001C70106 Fadd
    temp_369 = 0.0 - temp_361;
    temp_370 = temp_355 + temp_369;
    // 0x000CD8: 0x4C68101803770505 Fmul
    temp_371 = temp_358 * fp_c6.data[13].w;
    // 0x000CE8: 0x51A0059802971D1D Ffma
    temp_372 = fma(temp_366, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000CF0: 0x59A0080001770910 Ffma
    temp_373 = fma(temp_266, temp_299, temp_368);
    // 0x000CF8: 0x4C98079802A70009 Mov
    // 0x000D08: 0x49A2029803470500 Ffma
    temp_374 = 0.0 - temp_371;
    temp_375 = fma(temp_371, fp_c6.data[13].x, temp_374);
    // 0x000D10: 0x4C68101803170A0B Fmul
    temp_376 = temp_367 * fp_c6.data[12].y;
    // 0x000D18: 0x59A0080001970319 Ffma
    temp_377 = fma(temp_4, temp_345, temp_373);
    // 0x000D28: 0x385C103F80071403 Fadd
    temp_378 = temp_5 + 1.0;
    temp_379 = clamp(temp_378, 0.0, 1.0);
    // 0x000D30: 0x51A0049802A72208 Ffma
    temp_380 = fma(temp_357, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000D38: 0x49A00E180BF70609 Ffma
    temp_381 = fma(temp_370, fp_c6.data[47].w, temp_361);
    // 0x000D48: 0x49A202980357050A Ffma
    temp_382 = 0.0 - temp_371;
    temp_383 = fma(temp_371, fp_c6.data[13].y, temp_382);
    // 0x000D50: 0x49A2029803670505 Ffma
    temp_384 = 0.0 - temp_371;
    temp_385 = fma(temp_371, fp_c6.data[13].z, temp_384);
    // 0x000D58: 0x5C90008000B7000B Rro
    // 0x000D68: 0x5C68100000E70302 Fmul
    temp_386 = temp_379 * temp_352;
    // 0x000D70: 0x5C68100001970403 Fmul
    temp_387 = temp_354 * temp_377;
    // 0x000D78: 0x5C60178000971C09 Fmnmx
    temp_388 = max(temp_361, temp_381);
    // 0x000D88: 0x5C58300000870206 Fadd
    temp_389 = 0.0 - temp_380;
    temp_390 = temp_386 + temp_389;
    // 0x000D90: 0x5C58300001D70304 Fadd
    temp_391 = 0.0 - temp_372;
    temp_392 = temp_387 + temp_391;
    // 0x000D98: 0x59A0048000070900 Ffma
    temp_393 = fma(temp_388, temp_375, temp_388);
    // 0x000DA8: 0x49A004180BF70606 Ffma
    temp_394 = fma(temp_390, fp_c6.data[47].w, temp_380);
    // 0x000DB0: 0x49A00E980BF70404 Ffma
    temp_395 = fma(temp_392, fp_c6.data[47].w, temp_372);
    // 0x000DB8: 0x5C59100000070100 Fadd
    temp_396 = 0.0 - temp_355;
    temp_397 = temp_396 + temp_393;
    // 0x000DC8: 0x5C60178000670806 Fmnmx
    temp_398 = max(temp_380, temp_394);
    // 0x000DD0: 0x5080000000270B08 Mufu
    temp_399 = exp2(temp_376);
    // 0x000DD8: 0x5C60178000471D04 Fmnmx
    temp_400 = max(temp_372, temp_395);
    // 0x000DE8: 0x59A0030000570605 Ffma
    temp_401 = fma(temp_398, temp_385, temp_398);
    // 0x000DF0: 0x59A0020000A70404 Ffma
    temp_402 = fma(temp_400, temp_383, temp_400);
    // 0x000DF8: 0x5C59100000570205 Fadd
    temp_403 = 0.0 - temp_386;
    temp_404 = temp_403 + temp_401;
    // 0x000E08: 0x4C68101802B70806 Fmul
    temp_405 = temp_399 * fp_c6.data[10].w;
    // 0x000E10: 0x5C59100000470304 Fadd
    temp_406 = 0.0 - temp_387;
    temp_407 = temp_406 + temp_402;
    // 0x000E18: 0x4C58100C03870C08 Fadd
    temp_408 = temp_360 + fp_c3.data[14].x;
    // 0x000E28: 0x59A0008000670000 Ffma
    temp_409 = fma(temp_397, temp_405, temp_355);
    // 0x000E30: 0x59A0018000670401 Ffma
    temp_410 = fma(temp_407, temp_405, temp_387);
    // 0x000E38: 0x59A0010000670502 Ffma
    temp_411 = fma(temp_404, temp_405, temp_386);
    // 0x000E48: 0x0103EC000007F005 Mov32i
    // 0x000E50: 0x5C9807800FF70006 Mov
    // 0x000E58: 0x49A37F8C03C70804 Ffma
    temp_412 = 0.0 - fp_c3.data[15].x;
    temp_413 = fma(temp_408, temp_412, -0.0);
    // 0x000E68: 0x5C98078000770003 Mov
    // 0x000E70: 0xE30000000007000F Exit
    out_attr0.x = temp_409;
    out_attr0.y = temp_410;
    out_attr0.z = temp_411;
    out_attr0.w = temp_6;
    out_attr1.x = temp_413;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
